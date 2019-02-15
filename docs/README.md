# API Project

## What it is
One Paragraph of project description goes here
> DragonBallAPI
* Characters
* Planets

> Other?

## Character
There is a total of ? characters sorted by id.

### Character schema
|Key|Type|Description|
|---|---|---|
|id|int|The id of the character.
|name|string|The name of the character.
|status|string|The status of the character ('Alive', 'Dead' or 'unknown').
|species|string|The species of the character.
|forms|array (object)|Name and links to characters alternate forms.
|family|array (object)|Name and links to characters family members.
|series|array (string)|The sub-series that the character is from i.e. Z, GT, etc.
|gender|string|The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
|origin planet|object|Name and link to the character's origin planet.
|image|string (url)|Link to the character's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
|url|string (url)|Link to the character's own URL endpoint.
|created|string|Time at which the character was created in the database.

## Planet
There is a total of ? planets sorted by id.

### Planet schema
|Key|Type|Description|
|---|---|---|
|id|int|The id of the planet.
|name|string|The name of the planet.
|residents|array (url)|All characters from this planet.
|image|string (url)|Link to the planet's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
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
