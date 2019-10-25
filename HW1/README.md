# Homework 1

You can find problem description here: [https://github.com/sehsanm/sbu-ieng-98](https://github.com/sehsanm/sbu-ieng-98)

## API
The app is up and running on heroku: [https://sbu-ieng-98-hw1.herokuapp.com/](https://sbu-ieng-98-hw1.herokuapp.com/)

Method | Path | Query | Description
--- | --- | --- | ---
**GET** | `/gis/testpoint` | `?lat&long` | Return list of polygons which contains the point
**PUT** | `/gis/addpolygon` | - | Add a new polygon to the list of avaiable polygons


Example:
```
https://sbu-ieng-98-hw1.herokuapp.com/gis/testpoint?lat=51.40228271484375&long=35.701359130802444`
```
Result:
```
{
    "polygons": [
        "Tehran"
    ]
}
```

## Load Testing
A simple load test was made using [Artillery](https://artillery.io).

It created 100 "virtual users" each of which sent 100 HTTP GET requests to `/gis/testpoint`.


```
➜ artillery quick --count 100 -n 100 https://sbu-ieng-98-hw1.herokuapp.com/gis/testpoint\?lat\=51.40228271484375\&long\=35.701359130802444


All virtual users finished
Summary report @ 18:21:30(+0330) 2019-10-25
  Scenarios launched:  100
  Scenarios completed: 100
  Requests completed:  10000
  RPS sent: 355.49
  Request latency:
    min: 151
    max: 6439.3
    median: 173.9
    p95: 232.2
    p99: 824.2
  Scenario counts:
    0: 100 (100%)
  Codes:
    200: 10000
```
