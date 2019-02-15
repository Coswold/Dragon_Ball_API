module.exports = (app) => {
    // DISPLAY
    app.get("/", (req, res) => {
        res.render("index");
    });

}
