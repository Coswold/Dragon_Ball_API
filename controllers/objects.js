const Character = require('../models/character')
const Planet = require('../models/planet')

module.exports = (app) => {
    // DISPLAY
    app.get("/", (req, res) => {
        res.render("index");
    });

    // Submit Form
    app.get("/submit", (req, res) => {
        Planet.find()
        .then(planet => {
            res.render("submit", { planet });
        })
        .catch(err => {
            console.log(err.message);
        });
    });

    // CREATE PLANET
    app.get("/submit/planet", function(req, res) {
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
}
