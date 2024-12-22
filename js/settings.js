var MAPBOX_TOKEN = 'pk.eyJ1Ijoid2lubmV3b2VycCIsImEiOiJjbTR5dmpuNTExNWUxMm1zOHljYjBxOGU4In0.IW5d_FryZ_z97sNEVRdr0w'
var MAPBOX_STYLE = 'mapbox://styles/dcharvey/ck90r78ib0hnp1jnz9bwleg7h'
var SIDEWALKS_TILESET = 'mapbox://winnewoerp.afvujfub'
var SIDEWALKS_LAYER = 'sidewalkwidths_vienna-1qe992'
var DISTRICTS_TILESET = 'mapbox://dcharvey.7dbzv200'
var DISTRICTS_LAYER = 'districts_nyc-1eoi4m'
var UNITS = 'm' // change to 'm' for meters
var PRECISION = 0.1 // the number of decimal places
var GROUPS = [
  {
    "value": 0.0,
    "rating": "impossible",
    "color": "#FF0049"
  },
  {
    "value": 1.8,
    "rating": "very difficult",
    "color": "#FF461E"
  },
  {
    "value": 2.9,
    "rating": "difficult",
    "color": "#FF9300"
  },
  {
    "value": 3.6,
    "rating": "somewhat difficult",
    "color": "#e4da27"
  },
  {
    "value": 4.5,
    "rating": "somewhat easy",
    "color": "#1ce262"
  },
  {
    "value": 5.4,
    "rating": "easy",
    "color": "#00FFC4"
  },
  {
    "value": 6.4,
    "rating": "very easy",
    "color": "#00D2FF"
  },
]
