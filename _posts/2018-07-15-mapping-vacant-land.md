---
layout: post
title:  "Collectively mapping London's vacant land"
categories: blog 
tags: datavisualization web leaflet
---


<img style="float: center;" src="https://raw.githubusercontent.com/melanieimfeld/melanieimfeld.github.io/master/assets/prototype.png">

1.	Research objective

1.1.	Problem statement
According to think tank New Economic Foundation (NEF), groups looking to build community-led, affordable housing development in their area face one great obstacle: acquiring land (Martin, 2018). With regards to data availability, the author identified the following reasons:

Inaccessibility of data: Land ownership data is restricted to public. Access to the LM Land Registry is not free of charge and can only be obtained for individual properties (Shrubsole, 2016).

Reliability of data: The redevelopment of brownfield sites and empty property is greatly constrained by a paucity of data (Myers and Wyatt, 2004). Research by the author has shown that although databases exist for both commercial and governmental property ownership and vacant land, both databases are erroneous, outdated and incomplete. In addition, about 18% of land in England and Wales is unregistered, and not even the government knows who owns it (Hookway, 2018).

1.2.	Scope of thesis
Two pieces of information are essential for community groups interested in building: knowing the location of vacant land and knowing by whom it is owned. This thesis aims to explore gamified crowd sourced data collection methods to acquire data about land ownership and land vacancy. The methods will be tested in a proof-of-concept prototype. Previous studies highlight the following advantages of crowd sourcing:

Crowd sourced data collection: Collecting data through administrational bodies takes a long time whereas a crowd can rapidly generate data about circumstances affecting the crowd itself at little or no cost (Barbier et al., 2012). Based on the assumption that data about ownership and vacancy is outdated quickly, crowdsourcing methods have great potential.

Gamification in spatial processes: Krek (2005) observed that many citizens are “rationally ignorant”. According to the rational ignorance condition, citizens tend to ignore urban planning processes because participation would require a high investment of time and effort to ascertain the current planning situation. Poplin (2012), tries to overcome this condition by creating online serious games to bring playfulness and pleasure to the serious processes of urban planning decisions.


2.	Case study background

2.1.	Vacant land
In the year 2000, the government released a White Paper where councils were encouraged to use previously developed land and buildings are regenerated to maximize the use of existing resources (Davies et al., 2001). Using existing resources is important due to planning policies that restrict development on remaining greenfields and limitations relating to land ownership. However, the redevelopment of previously developed land, also referred to as brownfields, and empty property is greatly constrained by a lack of data (Myers and Wyatt, 2004). The following paragraphs describe the information that is publicly available and its deficits.

2.1.1.	National Land Use Database of Previously Developed Land (2017)
The government has undertaken some efforts to provide a database of vacant land across England. The database NLUD-PDL, released by Homes and Communities Agency (HCA) in 2017 and part of the general National Land Use Database, classifies land into vacant buildings and previously developed land. It contains around 8000 entries including area size and point coordinates. As caveats, the authorities state that the dataset was never validated. In addition, out of the 326 local planning authorities in England, excluding National Parks, only 149 (45%) provided information.

2.1.2.	London Brownfield Sites Database (2009)
The London Development Agency (LDA) and the Homes and Communities Agency (HCA) released a geospatial database of London's brownfield land over 0.25ha. However, on the website it is stated that the brownfield sites dataset was integrated in the NLUD-PDL. Hence, will only be accessible as point data. Old versions including polygons can still be accessed from the London Data Store.

2.2.	Land ownership
Land is a scarce resource – as Mark Twain put it, ‘they aren’t making it any more’. The land area of the United Kingdom is some 60 million acres – around an acre for each member of the population. According to Shrubsole (2016), an increasing number of inhabitants own nothing at all – while around 30,000 wealthy families continue to own some 50% of the rural land. This is particularly relevant in the face of the current housing crisis: The United Kingdom is facing a major housing affordability problem, with millions of people across the country unable to access a decent and secure home (Martin, 2018). Following the increasing pressure from the public, the government released two important datasets on commercial land ownership in 2017 that complements datasets about public ownership:

2.2.1.	Commercial and Corporate Ownership Data (2018)
The Commercial and Corporate Ownership Data (CCOD) contains more than 3.3 million title records of freehold and leasehold property in England and Wales and was first released in 2017. It does not contain any other spatial information than the address. The source data is from information supplied by citizens, corporate bodies and conveyances on registration deeds and documents. There can be inconsistencies in the way in which addresses and names are supplied to the HM Land Registry (HM Land Registry Technical Specification).

2.2.2.	Overseas Companies Ownership Data
The Overseas Companies Ownership Data (OCOD), a data set of approximately 100,000 records, describes titles registered to an overseas company (a company incorporated outside of the UK). Together CCOD and OCOD describe nearly all commercial and corporation aggregate titles registered in England and Wales.

2.2.3.	Property Unit Electronic Property Information Mapping Service (EPIMS)
In addition to the commercial datasets, the EPIMS register, updated daily, includes public land and property that is not being used and is therefore classed as surplus (Martin, 2017).

2.2.4.	HM Land Registry
To access information about an individual property, the HM Land Registry provides information upon registration and payment of £3 each for title register and title plan. The title plan only comes as .pdf format. Obtaining information requires the exact address.

2.2.5.	INSPIRE Index polygons
INSPIRE Index Polygons indicate the registered extent of freehold properties in England and Wales. Users can view or download the geospatial data for each council. The data is updated monthly (HM Land Registry, 2014).

3.	Volunteered Geographic Information (VGI)

A variety of terminologies describe information systems and processes that depend on participation, aided by digital means of the Web 2.0. Only some of them are described here in detail.

3.1.	Crowdsourcing and citizen science
Crowdsourcing is perceived as a tool to gather ideas, innovations, or information for certain purposes from a large number of participants (Leiponen and Aitamurto, 2011). The value in harvesting the knowledge of individuals is based on the observation that, although a large number of individual estimates may be incorrect, their average can be a match for expert judgment. A random sample of the opinions of a large number of users might lead to data and information that is surprisingly accurate and that, in some cases, cannot be recorded in any other way (Surowiecki, 2004). Citizen science (Bonney et al. 2009) describes the broader involvement of citizens in a range of scientific activities from data collection to data analysis and research design (Hudson-Smith et al., 2009).

3.2.	Spatial crowdsourcing: Participatory GIS (PGIS), Public Participation GIS (PPGIS), and Volunteered Geographic Information (VGI)
Concepts of citizen science can also be applied to geography. Many terms refer to this citizen involvement in geospatial sciences: These include ‘volunteered geographic information (VGI) (Goodchild, 2007), Participatory geographic information systems (PGIS), and Public participation GIS (PPGIS) (Dunn, 2007), to name a few. Regardless of the specific terminology, all of these activities share in common the distributed completion of small, clearly defined tasks (Hudson-Smith et al., 2009). VGI can enhance digital earth products, for instance by refining maps with tasks that machine learning algorithms struggle to perform (Salk et al., 2016). Prominent VGI activities focus on the creation of more elaborate representations of the Earth’s surface. OpenStreetMap is an international effort to create a free source of map data through volunteer effort (Goodchild, 2007). Missing Maps is a humanitarian project that preemptively maps parts of the world that are vulnerable to natural disasters, conflicts, and disease epidemics. Colouring London sets out to collect and share numerical and categorical data relating to the age and land use of buildings (Hudson, 2018). The Geo-Wiki project identifies locations where global land cover datasets disagree on a given land cover classification. It provides participants with aerial imagery, and asks them to make a classification choice for that location of disagreement (Sparks et al., 2015).



3.3.	Validating the output of VGI
While VGI has proliferated in recent years, assessing the quality of volunteer-contributed data has proven challenging. There are many approaches to quality control for volunteer-contributed data (Salk et al., 2016). Allahbakhsh (2013), differentiates between the following eight approaches: Expert review, Output agreement, Input agreement, Ground truth, Majority consensus, Contributor evaluation, real-time support and Workflow management.