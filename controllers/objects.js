const Character = require('../models/character')
const Planet = require('../models/planet')

module.exports = (app) => {
    // DISPLAY
    app.get("/", (req, res) => {
        res.render("index");
    });

    // Submit Form
    app.get("/submit", (req, res) => {
        res.render("submit");
    });

    // CREATE PLANET
    app.post("/api/planet", function(req, res) {
        // INSTANTIATE INSTANCE OF MODEL
        console.log("made it")
        const planet = new Planet();
        planet.id = 1
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
