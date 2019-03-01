# DragonBallAPI

## What it is
The Dragon Ball API is a RESTful API based on the television series Dragon Ball. By creating an account, you will get 5 queries per week, returning either characters or planets from the series. I am currently working on adding characters and planets to the database and have added the option for you to contribute as well. I am still working on how to verify the input from users.

## Introduction
This documentation will help you get familiar with the resources of the Dragon Ball API and show you how to make different queries, so that you can get the most out of it.

### Rate Limit
To stop malicious activity, I have implemented authentication as well as a hard limit on queries per week. Each user is associated with a query count that is incremented with each query. After 5 queries you will no longer be able to submit data or recieve the json objects. At the end of each week, all counters will be reset to zero.

### Rest
Base url: DragonBallAPI.com/api

The base url contains information about all available API's resources. All responses will return data in `json`.

*Sample Request*
```
https://dragonballapi.com/api/
```

```
{
  "characters": "https://rickandmortyapi.com/api/character",
  "planets": "https://rickandmortyapi.com/api/location",
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
```
https://rickandmortyapi.com/api/character/2
```
```
{"species":"Saiyan","status":"Alive","originPlanet":"Earth","gender":"Male","_id":"5c787595373a47d30cff0317","name":"Gohan","series":"Z","image":"../images/Gohan.jpg","created":"2019-02-28T23:58:13.141Z","url":"/api/character/Gohan","__v":0}
```

## Planet
There is a total of ? planets sorted by id.

### Planet schema
|Key|Type|Description|
|---|---|---|
|name|string|The name of the planet.
|residents|string|All characters from this planet.
|image|string (url)|Link to the planet's image.
|url|string|Link to planets own endpoint.
|created|string|Time at which the planet was created in the database.

## Features

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](#) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Connor Oswold** - *Initial work* - [Coswold](https://github.com/Coswold)

See also the list of [contributors](https://github.com/coswold/My_API/contributors) who participated in this project.

## Acknowledgments

* Thanks to [Blackrock Digital](https://github.com/BlackrockDigital) for the styling template.
* Inspiration came from Rick and Morty API (add link to github and url)
* etc
