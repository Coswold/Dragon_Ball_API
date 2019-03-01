const Character = require('../models/character')

const Planet = require('../models/planet')

module.exports = function(app) {
    // DISPLAY
    app.get("/", (req, res) => {
        Character.aggregate([{ $sample: { size: 6 } }])
        .then(character => {
            console.log(character[0]);
            res.render("index", { character });
        })
        .catch(err => {
            console.log(err.message);
        });
    });

    // Submit Form
    app.get("/submit/new", (req, res) => {
        Planet.find()
        .then(planet => {
            res.render("submit", { planet });
        })
        .catch(err => {
            console.log(err.message);
        });
    });

    // CREATE PLANET
    app.get("/planet/:name", function(req, res) {
        // INSTANTIATE INSTANCE OF MODEL
        const planet = new Planet();
        console.log(req.params.name)
        planet.name = (req.params.name).toString()
        planet.url = "/api/planet/" + planet.name
        planet.image = "/api/planet/images/" + planet.name + ".jpeg"

        console.log(planet)

        // SAVE INSTANCE OF PLANET MODEL TO DB
        planet.save()
        .then( character => {
            res.redirect(`/`);
        })
        .catch(err => {
            console.log(err);
        });
    });

    // CREATE CHARACTER
    app.post("/character", function(req, res) {
        // INSTANTIATE INSTANCE OF MODEL
        const character = new Character(req.body);
        character.url = "/api/character/" + character.name
        character.image = "../images/" + character.name + ".jpg"

        // SAVE INSTANCE OF CHARACTER MODEL TO DB
        character.save()
        Planet.findOneAndUpdate({ name: character.originPlanet },
            { $push: { residents: character.name } })
        .then( character => {
            res.redirect(`/`);
        })
        .catch(err => {
            console.log(err);
        });
    });
}
