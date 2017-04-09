# akahele
Final Project!!!

##API ROUTING

Create API routing for akahele.io.  Using `http` requests via `express` node module.

##CRIME

|**METHOD**|**URI**|**BODY TO SERVER**|**RESPONSE**|**ACTION**|
|---|---|---|---|---|
|`GET`|`/crime`|empty|```[{id: 1, year: 2005, murder: 10, arson: 0...}...]```JSON response from server with crime data|Query to the database to retrieve all crime data|
|`GET`|`/crime/year/:id`|empty|```[{id: 1, year 2005, murder: 10...}...]```JSON reponse from server with crime data total per year|Query to database retrieving all crime in a specific year|
|`GET`|`crime/year/type/:id`|empty|```[{id: 1, year: 2005, murder: 10},{id: 50, year: 2005, murder: 50}...]```JSON response from server with crime data per year per type|Query to database retrieving crime data in a given year per type|
|`GET`|`/crime/type/:id`|empty|```[{id: 1, murder: 10},{id: 50, murder: 20}...]```JSON response from server with crime data per type|Query database retrieving all crime per type|

###STATE

|**METHOD**|**URI**|**BODY TO SERVER**|**RESPONSE**|**ACTION**|
|---|---|---|---|---|
|`GET`|`/states`|empty|```[{id: 1, name: "Alabama"}...]```JSON response with array of state data|Query all data from State table|
|`GET`|`/states/crimes`|empty|```[{id: 1, murder: 10, theft: 100 ...state_id: 1}....]```JSON response from server containing crime data|Query **CRIME** table data `joining` with **STATE** table|
|`GET`|`/states/:id/crimes/`|empty|```[{id: 1, murder: 10, theft: 100....state_id: 1}....]```JSON response from server containing crime data per state|Query **CRIME** table data by specific **STATE** id|
|`GET`|`/states/crimes/year/:id`|empty|```[{id: 1, year: 2011, murder: 10...state_id: 1}...]```JSON response from server containing crime per year|Query **CRIME** data by specific `year` column in table|
|`GET`|`/states/crimes/year/:id/type/:id`|empty|```[{id: 1, year: 2016, murder: 10, state_id: 1},{id: 50, year: 2016, murder: 200, state_id: 1}...]```JSON response with crime data per state by year and type|Query database retrieving crime data per year per type by state|
|`GET`|`/states/crimes/type/:id`|empty|```[{id: 1, murder: 10, state_id: 1},{:id: 50, murder: 100, state_id: 1}...]```JSON response with crime data per state per type of crime|Query to database retrieving all of a states crime data per type|


###CITY

|**METHOD**|**URI**|**BODY TO SERVER**|**RESPONSE**|**ACTION**|
|---|---|---|---|---|
|`GET`|`/cities`|empty|```[{id: 1, name: "Kailua", state_id: 50}...]```JSON erponse with array of cities|Query to database retrieving all data from city table|
|`GET`|`/cities/crimes`|empty|```[{id: 1, murder: 10, theft: 100...city_id: 1}...]```JSON response from server containing all crime data in all cities|Query to database with all crime data in all cities|
|`GET`|`/cities/:id/crimes`|empty|```[{id: 1, murder: 10, theft: 100...city_id: 1},{id: 100, murder: 0, theft: 0...city_id: 69}...]```JSON response from server with all crime data per specific city|Query to database containing all crime data in a specific city|
|`GET`|`/cities/crimes/year/:id`|empty|```[{id: 1, year: 2005, murder: 10...city_id: 1},{id: 100, year: 2005, murder: 0...city_id: 69}]```JSON response from server with all crime data from a city per year|Query to database retrieving crime data per city per year|
|`GET`|`/cities/crimes/year/:id/type/:id`|empty|```[{id: 1, year: 2005, murder: 10, city_id: 1},{id: 100, year: 2005, murder: 10, city_id: 1}...]```JSON response with crime data per year per type in a specific city|Query to database with crime data per year per type in a city|
|`GET`|`/cities/crimes/type/:id`|empty|```[{id: 1, murder: 100, city_id: 1},{id: 500, murder: 10, city_id: 1}...]```JSON response with crime data per type in a city|Query to database with crime data in a city per type|