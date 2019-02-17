const Character = require('../models/character')
const Planet = require('../models/planet')

module.exports = function(app) {

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
    app.get("/api/character/:id", (req, res) => {
        Character.findById(req.params.id)
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
}
