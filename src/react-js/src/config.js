const config = {
  style: "mapbox://styles/paigew221/ckld9wb5w2azy17mloy9xuw0j",
  accessToken:
    "pk.eyJ1IjoicGFpZ2V3MjIxIiwiYSI6ImNrNHN2MGlqbTMzemYzZXE4NGF3b3N0bHUifQ.Q1leWIUrEmeIuyxXucGgeA",
  theme: "light",
  //   title: "Prison Ecology",
  alignment: "left",
  //   title: "",
  //   subtitle: "A descriptive and interesting subtitle to draw in the reader",
  //   byline: "By a Digital Storyteller",
  //   footer: "Source: source citations, etc.",
  chapters: [
    {
      id: "title-id",
      title: "The Prison Ecology Project",
      description:
        'A campaign under the Human Rights Defense Center, the <a href="http://nationinside.org/campaign/prison-ecology">Prison Ecology Project</a> has been created to investigate, document, and take actions to address the ways in which mass incarceration degrades the natural environment and the human health of those inside or nearby jails.<br> </br> This map not only shows the hidden nation of prisons, but the environmental hazards of seven examples accross the United States.',
      location: {
        center: [-98.4375, 39.4022],
        zoom: 4,
        pitch: 0,
        bearing: 0,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "rikers-island",
      title: "Rikers Island",
      description:
        'Built on a landfill, Rikers Island is notorious for its extreme heat, poor air quality, <a href="http://grist.org/justice/a-sinking-jail-the-environmental-disaster-that-is-rikers-island/">flooding and crumbling infrastructure</a>. The facility also does not have an evacuation plan in case of an emergency. <br> </br> The complex contains 10 jails, <a href="http://www.nytimes.com/2014/12/16/nyregion/what-is-happening-at-rikers-island.html?_r=0">"including facilities for women and adolescents, as well as an infirmary, powerplant and bakery."</a> <br> </br>40 percent of the inmates have been diagnosed with a mental illness, and 90 percent are black or latino from low-income neighborhoods in New York.<br> </br>Most of those detained at Rikers Island are pre trial detainees, meaning they have not even been convicted of a crime.',
      location: {
        center: [-73.8827, 40.7913],
        zoom: 15,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "sing-sing",
      title: "Sing Sing Correctional Facility",
      description:
        "About ten miles down river from the Indian Point Energy Center, the Sing Sing Correctional Facility has a completely insufficient emergency evacuation for prisoners. <br> </br> This was discovered in a 2012 legal proceeding filed by environmental groups in the Hudson Valley of New York during an administrative hearing of the Nuclear Regulatory Commission.",
      location: {
        center: [-73.9449, 41.2157],
        zoom: 12,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "sci-fayette",
      title: "SCI Fayette, PA",
      description:
        'Located on a former strip mining site and adjacent to a 506-acre coal ash dump owned by Matt Canestrale Contracting, the State Correctional Institute at Fayette has significantly high rates of cancer and illness among its inmates.<br> </br>According to a study by the Abolitionist Law Center, <a href="https://abolitionistlawcenter.org/our-work/cases/sci-fayette-coal-ash-investigation/">81 percent if the inmates suffer from some sort of respritory distress, 68 percent experienced gastrointestinal problems and 52 percent experienced adverse skin conditions.</a>',
      location: {
        center: [-79.977, 39.9997],
        zoom: 14,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "william-donaldson",
      title: "William E. Donaldson Facility, AL",
      description:
        'Commiting 1,060 Clean Water Act violations since 1999, the Donaldson Correctional Facility has dumped raw sewage into the Big Branch and Valley Creeks, which feed into the Black Warrior River.<br></br> Overflows from their wastewater treatment plant have been as high as 808,000 gallons in one day, and the plant is designed to handle only 270,000 gallons per day.<br></br>The prison was also designed to house only 990 inmates and currently contains over 1,500. <br></br>In September 2014 the Black Warrior Keeper reached a <a href="http://www.al.com/news/birmingham/index.ssf/2014/09/black_warrior_riverkeeper_sett.html">settlement </a> with the facility. However, in April 2015 the defendants from the wastewater treatment plant defaulted on their settlement, leaving the river in danger.',
      location: {
        center: [-87.1784, 33.5109],
        zoom: 15,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "marion-in",
      title: "Marion, IN",
      description:
        'In a 17-page 2007 report by the Indiana Department of Corrections, serious environmental contamination problems were identified in the Marion County Community Corrections Center.<br></br> The report noted, <a href="https://www.prisonlegalnews.org/news/2007/nov/15/prison-drinking-water-and-wastewater-pollution-threaten-environmental-safety-nationwide/">"feces leaking from toilets into latrines and leaking water/ sewage inside the building being diverted into open gutters."</a><br></br>Mold has also been found in the heating, ventilation and air-conditioning system which often causes Legionnaires Disease.<br></br>State Representative Mike Murphy, (R-Indianapolis) called the report "devastating" and something worthy of interest to Human Rights Watch.',
      location: {
        center: [-86.1462, 39.7661],
        zoom: 18,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "canon-city",
      title: "Cañon City, CO",
      description:
        'Home to nine state and four federal prisons, Cañon City is also home to one of the nations longest-running Superfund cleanups, the Cotter Uranium Processing Facility.<br></br> In March 2014, a broken pipe at the facility <a href="http://www.denverpost.com/2014/03/13/cotter-negotiates-amid-spills-and-uranium-spike-by-river-in-canon-city/">"spewed 20,000 gallons of uranium-laced waste."</a> Additionaly, in a February 20th, 2014 report by Cotters consultant found that uranium levels in the well in the nearby Lincoln Park neighborhood <a href="http://www.denverpost.com/2014/03/13/cotter-negotiates-amid-spills-and-uranium-spike-by-river-in-canon-city/">"were the highest recorded for this location."</a> The mill spilled another 1,800 gallons in November 2015.<br></br>Adding to the contamination, Cotter Corp. estimates that more than <a href="http://solitarywatch.com/2015/09/10/toxic-traps-environmental-hazards-threaten-two-federal-supermax-prisons/">19.9 tons of radioactive dust was emitted each year that the facility operated</a>, likely seeping into the soil. The facility was in operation from 1958 to 1978. Many of the prisons in the region are down-wind from the facility.',
      location: {
        center: [-105.1721, 38.4011],
        zoom: 13,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "monroe",
      title: "Monroe Correctional Complex, WA",
      description:
        'In 2006, the Monroe Complex became Washington State Department of Corrections first Silver LEED-certified building to house prisoners. However, half a million gallons of sewage water and other contaminates have been <a href="https://www.prisonlegalnews.org/news/2015/jul/31/greenwashing-washington-states-prison-system-river-sewage/">dumped or accidentally spilled from the complexs wastewater system over eight years.</a><br></br>Additionally, in a 2012 report by the Department of Ecology found that the prisons waste lagoons dikes separating the sewage lagoons from the Skykomish river, <a href="http://archive.seattleweekly.com/home/960079-129/seattleand-effluent-woes-in-monroe">could potentially release millions of gallons of untreated wastewater"</a> into the river.',
      location: {
        center: [-121.9968, 47.8423],
        zoom: 16,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "northwest",
      title: "Northwest Detention Center, Tacoma WA",
      description:
        'The Northwest Detention Center (NWDC) is a privetely-owned immigration prison, with the capacity to hold up to 1,575 immigrants. Many of those held at the NWDC have lived in the US for years, and some the majority of their lives.<br></br> The Detention Center is adjacent to a Superfund site known as the <a href="https://yosemite.epa.gov/R10/CLEANUP.NSF/sites/TacomaTarpits/$FILE/TTP-5Yr-Review-Sept03.pdf">Tacoma Tar Pits</a> and is located in a <a href="http://www.documentcloud.org/documents/408880-snewsroomp12081313010.html#document/p1/a67587">designated volcanic hazard zone.</a><br></br>Additionally, the Detention Center is also in a <a href="http://www.seattleglobalist.com/2015/03/18/northwest-detention-center-tsunami-disaster-evacuation-tacoma/34981">tsunami flood zone</a> and lacks an evacuation plan if an emergency were to take place.<br></br>Organizations like <a href="http://www.nwdcresistance.org/">NWDC Resistance</a> support and follow the leadership of those detained at the Northwest Detention Center, "demanding better treatment and conditions and the stop to all deportations."',
      location: {
        center: [-122.4299, 47.2475],
        zoom: 17,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "involved",
      title: "How To Get Involved",
      description:
        '<strong>1.</strong> Send a <a href="https://actionnetwork.org/letters/no-new-prison-in-district-12-2">message</a> to the BOP against their plans for the Letcher County Prison.<br></br> <strong>2.</strong> Join the <a href="https://actionnetwork.org/forms/become-a-champion">Prison Ecology email list</a> and invite others to do the same.<br></br><strong>3.</strong> Like and Share the Campaign to Fight Toxic Prisons on <a href="https://www.facebook.com/Campaign-to-Fight-Toxic-Prisons-1744188675811724/?fref=ts">Facebook</a> and <a href="https://twitter.com/FightXPrisons">Twitter.</a>',
      location: {
        center: [-98.4375, 39.4022],
        zoom: 4,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};

export default config;
