# Draft for chapters

## Introduction

2024 MUSA 611 JavaScript for Planners story map project
How accessible is your new home?
Byron Huang<br>17 Sep 2024

Welcome!

In October 2024, the government of Singapore would be launching 15 new public housing projects for sale. If you are a prospective homebuyer, how would you make the choice of which project to apply to?

This story map is aimed at illustrating the accessibility of these upcoming public housing projects. One common pain point that prospective homebuyers experience is comparing the accessibility of projects. 

To aid in the comparison process, the government releases Town Maps (such as the one pictured below), but these are static and comparing projects within the same launch is still not straightforward.

As such, this story map addresses this issue by experimenting with new ways of comparing sites within the same sales launch, using various accessibility indicators.

(sample town map)

Example of a static Town Map provided by the Singapore government for prospective buyers, with parks, cycle paths, stations, and some neighbourhood amenities represented.

To facilitate the comparison between different sites, accessibility metrics are calculated in ArcGIS and presented in the map views below. This story map examines the following indicators:

**Accessibility to nature**
Area (in km2) of parks and nature reserves within a 1km buffer from site

**Accessibility to transport**
Distance (in m) to nearest MRT/LRT station
Length (in m) of cycle paths within a 1km buffer from site

**Accessibility to existing neighbourhood amenities**
Distance (in m) to nearest hawker centre
Distance (in m) to nearest library
Area (in km2) of existing public housing within a 1km buffer from site

Let's begin exploring the sites on sale in October!

## Chapter 1 - Existing public housing and the Built-to-Order (BTO) system

The share of public housing in Singapore's housing market is particularly high in the world. This map shows the extent of public housing in Singapore (in red). About 80% of Singaporeans live in public housing. Every three months, the Housing and Development Board (HDB) adds to this public housing stock through the Built-to-Order (BTO) scheme. In this exercise, prospective homebuyers pay $10 to choose a site to ballot for. Successful applicants will receive a queue number for them to choose their preferred unit.


## Chapter 2 - October 2024 sales launch

In October 2024, the Housing and Development Board (HDB) would be launching 15 sites over 9 Planning Areas, covering 8,540 units. This map shows the 15 sites (in orange) slated for launch in October 2024. 

The sites range from 270 to 1840 units. Within each site, unit sizes range from smaller 2-room units (about 36 sqm) to larger 5-room units (about 110 sqm). Not all housing types are available in each site. 

## Chapter 3 - Metric #1 : Accessibility to nature

Proximity to nature is prized by many prospective homebuyers, particularly in the densely populated nation of Singapore. The value of having easy access to parks and open spaces is further emphasised through the experience of the pandemic. In Singapore, parks are largely managed by the National Parks Board (NParks).

The map here shows the parks and nature reserves dataset from NParks. Using ArcGIS, the area of parkland in a 1km buffer surrounding each October 2024 project is calculated, as an indicator for comparison between projects.


## Chapter 5 - Pasir Ris : Greenest project in the Oct 2024 launch

In this sales launch, the two Pasir Ris sites stood out among the rest from having the best parks coverage in their surrounding area. This is because the two sites are built right on the Southern end of Pasir Ris Park - a waterfront park with excellent views of the rustic island of Pulau Ubin across the channel.

## Chapter 6 - Greenery at a price?

While accessibility to greenery is the strongest characteristic for the two Pasir Ris sites, one drawback is the lack of accessibility to the city centre, with Pasir Ris (along with Tampines) being the easternmost districts in Singapore. Excluding last-mile journeys and waiting times, the train ride from Pasir Ris to City Hall takes at least 27 minutes.

## Chapter 7 - Metric #2 : Accessibility to transport

Touching on the point of transportation, it is timely to introduce the second metric considered in this site analysis story map - accessibility to rail and active transport.

Due to the high costs of cars (and associated taxes), car ownership in Singapore is particularly low compared to other countries, at 12 cars per 100 people. Most commuters thus rely on the efficient public transit system, comprised of a heavy and light rail network and a bus network (a large part of which are feeder buses to the rail network).


## Chapter 8 - Rapid transit lines in Singapore

At present, Singapore has 8 heavy rail lines and 3 light rail lines. In the coming decade, 2 additional rail lines would be opened. This map shows the existing rail lines in Singapore.

Geoprocessing on ArcGIS allows us to determine the distance each site is to the nearest rapid transit stop. The results obtained showed that this distance varies widely from project to project in the October 2024 launch. 

(Only completed segments of lines are colourised.)

## Chapter 9 - Geylang : A housing project built on top of an existing station

The most remarkable project in this October 2024 sales exercise is the Geylang site, built atop the existing Downtown Line station of Mattar. 

Interestingly, this site is a mixture of 260 units of Community Care Apartments and just 160 units of 4-room flats. Community Care Apartments are a new housing type introduced by the government targeted at senior buyers, with customised senior-friendly design features, flexible 15-35 year leases and integrated with neighbourhood care facilities.

Visit this link here to learn more about Community Care Apartments:
https://www.hdb.gov.sg/residential/buying-a-flat/finding-a-flat/types-of-flats/community-care-apartments

## Chapter 10 - Jurong West - Have you got a car?

In contrast, the project at Jurong West is the least accessible to rapid transit. In fact, it is over 1km away from the nearest MRT station (Jurong Lake District station), which is still quite a few years away from opening. The nearest operational MRT station is even further away.

However, accessibility to the road network is superior. The site is located right beside the exit of the Ayer Rajah Expressway which runs to the city (with tolls). If one would like to commute to the city by bus, semi-express buses run along the Expressway - a viable alternative to taking feeder buses to Lakeside and onwards by train to the city. Still, the frequency of such semi-express buses are relatively low, and services are susceptible to congestion. Moreover, whether these bus services survive into the future is up to the discretion of the Land Transport Authority.

## Chapter 11 - Accessibility to active transport infrastructure

What about intra-town journeys by active modes? 

Despite Singapore's hot weather, the expansion of the cycle path + Park Connector Network is a priority for transport policy. In Aug 2024, the government announced that an additional 84 km of cycle paths would be ready by 2030. Let us find out how accessible the October 2024 sites are to the existing cycle path network.

## Chapter 12 - The current cycle path network

The goal of the Land Transport Authority is to have 8 in 10 public housing residents to be within 10 minutes from their nearest cycle path.

The map here shows the extent of Singapore's cycle path network (in blue). Spatial analysis on ArcGIS shows that most October 2024 sites have a decent cycle path coverage in a 1 km buffer around the site.

## Chapter 13 - Bukit Batok : Not yet ready for cyclists?

The Bukit Batok project in the October 2024 launch sees the lowest cycle path coverage in its vicinity. Moreover, prospective buyers should note that cycling would unlikely be a pleasant experience in the short to medium term due to the fact that the project is right beside an important site access road for the Tengah New Town development, with significant movements of heavy vehicles to be expected during the day.

## Chapter 14 - Metric #3 : Accessibility to existing neighbourhood amenities

Would you live in a neighbourhood where the nearest hawker centre is over 15 minutes away by walking in the Singapore sun?

This last section considers a set of indicators on the accessibility of each site to existing neighbourhood amenities, by looking at the distance to the nearest hawker centre, library and the density of existing mixed-use public housing estates in the 1 km buffer of each site.

## Chapter 15 - Hawker centres : Food havens within a country with good food

The multi-ethnic character of Singapore blesses the country with exceptionally good food from various cuisines. The colonial experience allows different cuisines to influence one another, giving rise to unique dishes not commonly found elsewhere.

The National Environment Agency operates 125 hawker centres - with generally low rents for stallholders. These are shown in the map here in purple. Residents can find an assortment of food from various cultures within each hawker centre at reasonable prices.

## Chapter 16 - Bayshore : Where are the hawkers at?

Among the 15 sites in the October 2024 launch, the two sites at the Bayshore neighbourhood have the lowest accessibility to existing hawker centres (over 1 km away from the nearest hawker centre). Perhaps it is time for planners to build Bayshore's very own hawker centre?

## Chapter 17 - Jurong West : A similar plight

Like Bayshore, the Jurong West site is also over 1 km away from the nearest hawker centre. Would the proximity to the expressway tempt residents to drive to their favourite good food spots? 

## Chapter 18 - Knowledge is power : Public libraries in Singapore

Public libraries are a draw for Singaporeans - young and old. Their air-conditioned reading and study rooms are perfect for individuals and families to spend hours reading for leisure or doing work.

At present, Singapore has 27 public libraries. Existing public libraries are also progressively renovated as they age, and new ones are built in some New Towns such as Punggol.

Libraries in Singapore are of high quality, as exemplified in the Punggol Regional Library below, which houses a makerspace. All facilities are free to use.
https://www.nlb.gov.sg/main/visit-us/our-libraries-and-locations/libraries/punggol-regional-library

(Image of Punggol Regional Library)

Many sites in the October 2024 launch have decent access to existing public libraries.


## Chapter 19 - Ang Mo Kio : Library at the doorstep

The Ang Mo Kio site in the October 2024 launch is right by the Ang Mo Kio Public Library, one of the earliest ones opened in Singapore. 

## Chapter 20 - Neighbourhood amenities in existing public housing estates

One distinctive characteristic of neighbourhood planning in Singapore is their mixed-use character, an influence of post-war British town planning (in New Towns such as Stevenage and Letchworth).

As such, the density of existing public housing in a 1 km buffer is a useful proxy for access to neighbourhood amenities, covering anything from barber shops, bookstores, cafes, convenience stores and independent grocers.

## Chapter 21 - Bayshore : Breaking the predominantly private residential character of the East Coast

By this measure (density of existing public housing in vicinity), the two sites at the neighbourhood of Bayshore have the lowest access to amenities in existing public housing estates.


## Chapter 22 - Diversification of housing mix in the East Coast

Indeed, the East Coast of Singapore is generally dominated by private residential estates, and planners intend to introduce a mix of public and private housing in this area, through new developments such as Bayshore. However, residents can expect there to be limited amenties in existing public housing estates in the meantime.

## Chapter 23 - Conclusion

From the above case studies, we can see that there are plenty of tradeoffs when making a choice for which new launch site to pick. For instance, the lack of accessibility to public transit may be compensated by generous parks and open spaces or superior highway access, as seen in Jurong West.

As you make your choice on where to live, do check out the types of subsidies available to your household!
https://www.hdb.gov.sg/residential/buying-a-flat/understanding-your-eligibility-and-housing-loan-options/flat-and-grant-eligibility

## Footer

This is not an advertisement for the Singapore government. However, the author would like to thank the Singapore government for access to datasets used in this project, via https://data.gov.sg

Credits to juanfrans Juan Francisco Saldarriaga (PointsUnknown) for the storymap template
https://github.com/PointsUnknown/PointsUnknown.github.io
