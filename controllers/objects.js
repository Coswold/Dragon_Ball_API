const Character = require('../models/character')
const Planet = require('../models/planet')

module.exports = function(app) {
    // DISPLAY
    app.get("/", (req, res) => {
        Character.aggregate([{ $sample: { size: 6 } }])
        .then(character => {
            console.log(character[0])
            res.render("index", { character });
        })
        .catch(err => {
            console.log(err.message);
        });
    })

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
    app.get("/planet", function(req, res) {
        // INSTANTIATE INSTANCE OF MODEL
        console.log("made it")
        const planet = new Planet();
        planet.name = "Vegeta"
        planet.url = "/api/planet/Vegeta"

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
        character.image = "api/character/images/" + character.name + ".jpeg"

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
