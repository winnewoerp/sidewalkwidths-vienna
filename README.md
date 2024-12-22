# Sidewalk Widths Vienna

***This is a fork of [Meli Harvey's NYC Sidewalk Widths tool](https://github.com/meliharvey/sidewalkwidths-nyc)***

Widths are extracted from the [Geopackage GIP Reference at data.gv.at](https://www.data.gv.at/katalog/en/dataset/3fefc838-791d-4dde-975b-a4131a54e7c5#resources) (version 2024/10) by using the *WIDTHAVERAGE* attribute of all relevant edges from the *LINEARUSE_OGD<* layer.

This repo contains the notebooks to reproduce this work, as well as the finished Sidewalk Width dataset in GeoJSON format.

## Link
[viennasidewalks.stadtkreation.de](https://viennasidewalks.stadtkreation.de)

## Methodology

1) Load LINEARUSE_OGD layer from the Geopackage loaded from the source linked above in QGIS.

2) Filter by relevant BASETYPES. The lookup table can be found here: [Intermodaler Verkehrsgraph Österreich - Standardbeschreibung der Graphenintegrationsplattform (GIP) (PDF)](https://www.gip.gv.at/assets/downloads/GIP_Datenstandard_2.3.4.pdf) at page 57. `"BASETYPE" IN (7, 21, 36, 37)`

3) As this does also include footways that are no sidewalks, buffer all roadways (BASETYPE = 1) by 20 meters. Then extract all sidewalks using the "Extract by expression" tool on the LINEARUSE_OGD layer. `overlay_within('paste_your_buffer_layer_name') = true`. (Still a rough approach, as small sections next to streets may remain that actually are no sidewalks.)

4) Removed all fields except *id* and *WIDTHAVERAGE*. Rename the latter to *width*

5) Save the result as GeoJSON, using EPSG:4326 as CRS.


## Forking
If you want to make a version of Sidewalk Widths for your own city, just fork this repo and use whatever portion of the code you like. Not all cities will have publicly accessible linear sidewalk data, so you may need to produce the sidewalk dataset in a different way (i.e. skeletonize polygon data from planimetric data or curbs to parcel boundaries).

The website should work with only a few changes. I've consolidated most of the variables you need to customize in a file called ```settings.js```. It should include things like your Mapbox token, sidewalk width ratings, and units of measurement for you to customize.

### Virtual environment
The fastest way to get your vitual environment configured to run the Jupyter Notebook is by using Anaconda to install the following depedencies. In the Anaconda prompt type the following:

```conda create -n opendata-env -c conda-forge python=3.8 geopandas matplotlib tqdm notebook ipywidgets```

Now activate your virtual environment by typing the following into the Anaconda Prompt and pressing enter.

```conda activate opendata-env```

Finally, install this last python package by typing the following in the Anaconda Prompt and pressing enter.

```pip install centerline```

### Mapbox
Sidewalk widths uses Mapbox for the custom map style and serve the sidewalk widths data as a tileset. If you're creating your own version of the site you must make a Mapbox account and replace the access token with your own. My access token is restricted to the stadtkreation.de URL.

#### Tilesets
To create a tileset from your sidewalk width GeoJSON, following the [Mapbox documentation here](https://docs.mapbox.com/studio-manual/reference/tilesets/).

#### Custom Style
You can copy Meli Harvey's [sidewalk widths custom Mapbox style here](https://api.mapbox.com/styles/v1/dcharvey/ck90r78ib0hnp1jnz9bwleg7h.html?fresh=true&title=copy&access_token=pk.eyJ1IjoiZGNoYXJ2ZXkiLCJhIjoiY2s5N3Zjc3ZxMGYwazNlbm9ubzA1d3Q1dCJ9.szxUl4AKCdUNLlmvham6og).
