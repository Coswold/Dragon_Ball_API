# DragonBallAPI

## What it is
The Dragon Ball API is a RESTful API based on the television series Dragon Ball. By creating an account, you will get 5 queries per week, returning either characters or planets from the series. I am currently working on adding characters and planets to the database and have added the option for you to contribute as well. I am still working on how to verify the input from users. Check out the deployment [here](https://dragon-ball-api.herokuapp.com/).

## Introduction
This documentation will help you get familiar with the resources of the Dragon Ball API and show you how to make different queries, so that you can get the most out of it.

### Rate Limit
Authentication has been implemented as well as a limit on queries of up to 100 per every 15 minutes. I implemented `express-rate-limit` to stop malicious queries, data submissions, and account creations. After 100 queries, 5 character submissions, or 2 account creations, your IP will be flagged for a certain period of time.

### Rest
Base url: DragonBallAPI.com/api

The base url contains information about all available API's resources. All responses will return data in `json`.

*Sample Request*
```
https://dragonballapi.com/api/
```

```
{
  "characters": "https://dragonballapi.com/api/character",
  "planets": "https://dragonballapi.com/api/location",
}
```
There are currently 2 available resources:

* Character: Used to get all characters
* Planet: Used to get all planets

## Characters
Currently collecting data on characters.

### Character schema
|Key|Type|Description|
|---|---|---|
|name|string|The name of the character.
|status|string|The status of the character ('Alive', 'Dead' or 'unknown').
|species|string|The species of the character.
|series|string|The sub-series that the character is from i.e. Z, GT, etc.
|gender|string|The gender of the character ('Female', 'Male', 'Genderless').
|origin planet|string (url)|Url to the character's origin planet.
|image|string (url)|Link to the character's image.
|url|string (url)|Link to the character's own URL endpoint.
|created|string|Time at which the character was created in the database.

### Get all characters
You can access the list of characters by using the /character endpoint.
```
https://dragonballapi.com/api/character/
```

### Get a single character
You can get a single character by adding the name as a parameter: /character/Gohan

If a name has a space `' '`, replace it with an underscore `_`.
```
https://dragonballapi.com/api/character/2
```
```
{
  "species":"Saiyan",
  "status":"Alive",
  "originPlanet":"Earth",
  "gender":"Male",
  "_id":"5c787595373a47d30cff0317",
  "name":"Gohan","series":"Z",
  "image":"../images/Gohan.jpg",
  "created":"2019-02-28T23:58:13.141Z",
  "url":"/api/character/Gohan",
  "__v":0
}
```

## Planet
Currently collecting data on planets.

### Planet schema
|Key|Type|Description|
|---|---|---|
|name|string|The name of the planet.
|residents|string|All characters from this planet.
|image|string (url)|Link to the planet's image.
|url|string|Link to planets own endpoint.
|created|string|Time at which the planet was created in the database.


### Get all planets
You can access the list of characters by using the /planet endpoint.
```
https://dragonballapi.com/api/planet/
```

### Get a single planet
You can get a single character by adding the name as a parameter: /planet/Earth

If a name has a space `' '`, replace it with an underscore `_`.
```
https://dragonballapi.com/api/planet/Earth
```
```
{
  "residents":["Gohan","Trunks","Android16"],
  "_id":"5c785e7a52cc1dd11ddb59ba",
  "created":"2019-02-28T22:19:38.652Z",
  "name":"Earth",
  "url":"/api/planet/Earth",
  "image":"/api/planet/images/Earth.jpeg",
  "__v":0
}
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

Install all dependencies

```
npm install
```

Create .env file

```
touch .env
```

Add secret key to .env

```
SECRET = ???
```

## Built With

* [Bootstrap](https://getbootstrap.com/) - Web framework
* [Express-rate-limit](https://www.npmjs.com/package/express-rate-limit) - Rate limiting middleware
* [Npm](https://www.npmjs.com/) - Dependency management
* [Json Web Tokens](https://jwt.io/) - Encryption
* [MongoDB](https://www.mongodb.com/) - Document based database

## Authors

* **Connor Oswold** - *Initial work* - [Coswold](https://github.com/Coswold)

See also the list of [contributors](https://github.com/coswold/Dragon_Ball_API/contributors) who participated in this project.

## Acknowledgments

* Thanks to [Blackrock Digital](https://github.com/BlackrockDigital) for the styling template.
* Inspiration came from [Rick and Morty API](https://rickandmortyapi.com/) created by [Axel](https://github.com/afuh).
