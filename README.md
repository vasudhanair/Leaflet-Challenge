# Leaflet-Challenge
Welcome to the United States Geological Survey, or USGS for short! The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding..) on issues facing our planet.

Level 1: Basic Visualization BasicMap

First task was to visualize an earthquake data set.

Gather data set

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visited the USGS GeoJSON Feed page and picked a data set to visualize. When I clicked on a data set, for example 'All Earthquakes from the Past 7 Days', I was given a JSON representation of that data.I used the URL of this JSON to pull in the data for my visualization.

JSON

Import & Visualize the Data

Created a map using Leaflet that plots all of the earthquakes from my data set based on their longitude and latitude.

My data markers reflect the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes  appear larger and darker in color.

Included popups that provide additional information about the earthquake when a marker is clicked.

Created a legend that will provide context for the map data.
