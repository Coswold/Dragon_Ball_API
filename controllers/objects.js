const Character = require('../models/character')
const Planet = require('../models/planet')

module.exports = function(app) {
    // DISPLAY
    app.get("/", (req, res) => {
        res.render("index");
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
    app.post("/planet", function(req, res) {
        // INSTANTIATE INSTANCE OF MODEL
        console.log("made it")
        const planet = new Planet();
        planet.name = "Vageta"
        planet.url = "/api/planet/1"

        console.log(planet)

        // SAVE INSTANCE OF PLANET MODEL TO DB
        planet.save()
        .catch(err => {
            console.log(err);
        });
    });

    // CREATE CHARACTER
    app.post("/character", function(req, res) {
        // INSTANTIATE INSTANCE OF MODEL
        console.log("made it")
        const character = new Character(req.body);

        console.log(character)

        // SAVE INSTANCE OF PLANET MODEL TO DB
        character.save()
        .then( character => {
            res.redirect(`/`);
        })
        .catch(err => {
            console.log(err);
        });
    });
}
