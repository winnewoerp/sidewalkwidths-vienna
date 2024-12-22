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

4) Removed all fields except *id* and *WIDTHAVERAGE*. Rename the latter to *width*.

5) Save the result as GeoJSON, using EPSG:4326 as CRS.
