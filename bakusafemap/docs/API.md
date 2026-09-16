# API Reference

## Nominatim Search
```
GET https://nominatim.openstreetmap.org/search
  ?format=json
  &q=<query>+Baku
  &limit=5
  &viewbox=49.52,40.26,50.12,40.57
  &bounded=0
  &accept-language=az,ru
```

## OSRM Routing
```
GET https://router.project-osrm.org/route/v1/driving/{lng1},{lat1};{lng2},{lat2}
  ?overview=full
  &geometries=geojson
  &steps=true
```
