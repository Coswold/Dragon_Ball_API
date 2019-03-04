const Character = require('../models/character')
const Planet = require('../models/planet')

module.exports = function(app) {

    // GET ALL RESOURCES
    app.get("/api", (req, res) => {
        var resource = {
            "characters": "dragon-ball-api.herokuapp.com/api/character",
            "planets": "dragon-ball-api.herokuapp.com/api/planet"
        }
        res.json(resource);

    })

    // GET ALL CHARACTERS
    app.get("/api/character", (req, res) => {
        Character.find()
        .then(character => {
            res.json(character);
        })
        .catch(err => {
            console.log(err.message);
        });
    })

    // GET SINGLE CHARACTER
    app.get("/api/character/:name", (req, res) => {
        Character.findOne(req.params)
        .then(character => {
            res.json(character);
        })
        .catch(err => {
            console.log(err.message);
        });
    })

    // GET ALL PLANETS
    app.get("/api/planet", (req, res) => {
        Planet.find()
        .then(planet => {
            res.json(planet);
        })
        .catch(err => {
            console.log(err.message);
        });
    })

    // GET SINGLE PLANET
    app.get("/api/planet/:name", (req, res) => {
        Planet.findOne(req.params)
        .then(planet => {
            res.json(planet);
        })
        .catch(err => {
            console.log(err.message);
        });
    })
}
