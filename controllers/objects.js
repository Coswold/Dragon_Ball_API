const Character = require('../models/character');
const Planet = require('../models/planet');
const rateLimit = require("express-rate-limit");

const createAccountLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 5, // start blocking after 5 requests
  message:
    "Too many characters added from this IP, please try again after an hour"
});

module.exports = function(app) {
    // DISPLAY
    app.get("/", (req, res) => {
        var currentUser = req.user;
        console.log(currentUser)
        Character.aggregate([{ $sample: { size: 6 } }])
        .then(character => {
            res.render("index", { currentUser, character });
        })
        .catch(err => {
            console.log(err.message);
        });
    });

    app.get("/about", (req, res) => {
        var currentUser = req.user;
        res.render("about", { currentUser });
    });

    app.get("/documentation", (req, res) => {
        var currentUser = req.user;
        res.render("documentation", { currentUser });
    });

    // Submit Form
    app.get("/submit/new", (req, res) => {
        if (req.user) {
            var currentUser = req.user;

            Planet.find()
            .then(planet => {
                res.render("submit", { planet, currentUser });
            })
            .catch(err => {
                console.log(err.message);
            });
        } else {
            res.redirect(`/login`); // UNAUTHORIZED
        }
    });

    // CREATE PLANET
    app.get("/planet/:name", function(req, res) {
        if (req.user && req.user.username == "admin") {
            // INSTANTIATE INSTANCE OF MODEL
            const planet = new Planet();
            console.log(req.params.name)
            planet.name = (req.params.name).toString().replace(/ /g,"_")
            planet.url = "/api/planet/" + planet.name
            planet.image = "../images/" + planet.name + ".jpg"

            console.log(planet)

            // SAVE INSTANCE OF PLANET MODEL TO DB
            planet.save()
            .then( character => {
                res.redirect(`/`);
            })
            .catch(err => {
                console.log(err);
            });
        } else {
            res.redirect(`/`);
        }
    });

    // CREATE CHARACTER
    app.post("/character", createAccountLimiter, function(req, res) {
        if (req.user) {
            // INSTANTIATE INSTANCE OF MODEL
            const character = new Character(req.body);
            character.name = character.name.replace(/ /g,"_")
            character.url = "/api/character/" + character.name

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
        } else {
            res.redirect(`/`);
        }
    });
}
