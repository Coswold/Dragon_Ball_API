module.exports = (app) => {
    // DISPLAY
    app.get("/", (req, res) => {
        res.render("index");
    });

    app.get("/submit", (req, res) => {
        res.render("submit");
    });
}
