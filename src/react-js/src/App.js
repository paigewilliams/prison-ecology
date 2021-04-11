import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import mapboxgl from "mapbox-gl";
import scrollama from "scrollama";

const layerTypes = {
  fill: ["fill-opacity"],
  line: ["line-opacity"],
  circle: ["circle-opacity", "circle-stroke-opacity"],
  symbol: ["icon-opacity", "text-opacity"],
  raster: ["raster-opacity"],
  "fill-extrusion": ["fill-extrusion-opacity"],
};

const alignments = {
  left: "lefty",
  center: "centered",
  right: "righty",
};

const transformRequest = (url) => {
  const hasQuery = url.indexOf("?") !== -1;
  const suffix = hasQuery
    ? "&pluginName=journalismScrollytelling"
    : "?pluginName=journalismScrollytelling";
  return {
    url: url + suffix,
  };
};


function Chapter({ id, theme, title, image, description, currentChapterID, map }) {
  const classList = id === currentChapterID ? "step active" : "step";
  return (
    <div id={id} className={classList}>
      <div className={theme}>
        {title && <h3 className="title">{title}</h3>}
        {image && <img src={image} alt={title}></img>}
        {description && <p dangerouslySetInnerHTML={{ __html: description }} />}
      </div>
    </div>
  );
}

const App = ({chapters, theme, style, accessToken, title, subtitle, byline, alignment, footer}) => {
  const [currentChapter, setCurrentChapter] = useState(chapters[0]);
  const mapContainter = useRef();
  const scroller = scrollama();

  useEffect(() => {
    const mapStart = chapters[0].location;
    mapboxgl.accessToken = accessToken;

    const map = new mapboxgl.Map({
      container: mapContainter.current,
      style: style,
      center: mapStart.center,
      zoom: mapStart.zoom,
      pitch: mapStart.pitch,
      bearing: mapStart.bearing,
      transformRequest: transformRequest,
    });

    map.addControl(new mapboxgl.NavigationControl());

    function getLayerPaintType(layer) {
      var layerType = map.getLayer(layer).type;
      return layerTypes[layerType];
    }
    
    function setLayerOpacity(layer) {
      var paintProps = getLayerPaintType(layer.layer);
      paintProps.forEach(function (prop) {
        map.setPaintProperty(layer.layer, prop, layer.opacity);
      });
    }


    map.on("load", function () {
      // setup the instance, pass callback functions
      scroller
        .setup({
          step: ".step",
          offset: 0.6,
          progress: true,
        })
        .onStepEnter((response) => {
          const chapter = chapters.find(
            (chap) => chap.id === response.element.id
          );
          setCurrentChapter(chapter);
          map.flyTo(chapter.location);

          if (chapter.onChapterEnter.length > 0) {
            chapter.onChapterEnter.forEach(setLayerOpacity);
          }
        })
        .onStepExit((response) => {
          var chapter = chapters.find(
            (chap) => chap.id === response.element.id
          );
          if (chapter.onChapterExit.length > 0) {
            chapter.onChapterExit.forEach(setLayerOpacity);
          }
        });
    });



    window.addEventListener("resize", scroller.resize);

  }, [mapContainter]);

  useEffect(() => {
    if(currentChapter.id === 'involved'){
      scroller.destroy()
    }
  }, [currentChapter])
  

  return (
      <div>
        <div
          ref={mapContainter}
          className="absolute top right left bottom"
        />
        <div id="story">
          {title && (
            <div id="header" className={theme}>
              <h1>{title}</h1>
              {subtitle && <h2>{subtitle}</h2>}
              {byline && <p>{byline}</p>}
            </div>
          )}
          <div id="features" className={alignments[alignment]}>
            {chapters.map((chapter) => (
              <Chapter
                key={chapter.id}
                theme={theme}
                {...chapter}
                currentChapterID={currentChapter.id}
              />
            ))}
          </div>
          {footer && (
            <div id="footer" className={theme}>
              <p>{footer}</p>
            </div>
          )}
        </div>
      </div>
  )

}

export default App;
