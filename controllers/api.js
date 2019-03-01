const Character = require('../models/character')
const Planet = require('../models/planet')

module.exports = function(app) {

    // GET ALL CHARACTERS
    app.get("/api/character", (req, res) => {
        if (req.user) {
            Character.find()
            .then(character => {
                res.json(character);
            })
            .catch(err => {
                console.log(err.message);
            });
        } else {
            res.redirect(`/login`); // UNAUTHORIZED
        }
    })

    // GET SINGLE CHARACTER
    app.get("/api/character/:name", (req, res) => {
        if (req.user) {
            Character.findOne(req.params)
            .then(character => {
                res.json(character);
            })
            .catch(err => {
                console.log(err.message);
            });
        } else {
            res.redirect(`/login`); // UNAUTHORIZED
        }
    })

    // GET ALL PLANETS
    app.get("/api/planet", (req, res) => {
        if (req.user) {
            Planet.find()
            .then(planet => {
                res.json(planet);
            })
            .catch(err => {
                console.log(err.message);
            });
        } else {
            res.redirect(`/login`); // UNAUTHORIZED
        }
    })

    // GET SINGLE PLANET
    app.get("/api/planet/:name", (req, res) => {
        if (req.user) {
            Planet.findOne(req.params)
            .then(planet => {
                res.json(planet);
            })
            .catch(err => {
                console.log(err.message);
            });
        } else {
            res.redirect(`/login`); // UNAUTHORIZED
        }
    })
}
