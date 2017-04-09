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
|`GET`|`/states/crimes/:id`|empty|```[{id: 1, murder: 10, theft: 100....state_id: 1}....]```JSON response from server containing crime data per state|Query **CRIME** table data by specific **STATE** id|
|`GET`|`/states/crimes/year:id`|empty|```[{id: 1, year: 2011, murder: 10...}...]```JSON response from server containing crime per year|Query **CRIME** data by specific `year` column in table|
