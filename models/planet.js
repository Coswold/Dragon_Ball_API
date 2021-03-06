const mongoose = require("mongoose");
const Populate = require("../util/autopopulate");
const Schema = mongoose.Schema;

const PlanetSchema = new Schema({
    name: { type: String, trim: true, required: true, unique: true },
    residents: [{ type: String, trim: true }],
    created: { type: Date, default: Date.now },
    image: String,
    url: String,
    edited: Date
});

// Populate
//PlanetSchema.pre('findOne', Populate('residents')).pre('find', Populate('residents'))

module.exports = mongoose.model("Planet", PlanetSchema);
