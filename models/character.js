const mongoose = require("mongoose");
const Populate = require("../util/autopopulate");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name: { type: String, trim: true, required: true },
    forms: [{ type: String, default: 'unknown' }],
    species: { type: String, trim: true, default: 'unknown' },
    status: { type: String, trim: true, default: 'unknown' },
    originPlanet: { type: String, default: 'unknown' },
    gender: { type: String, trim: true, default: 'unknown' },
    series: { type: String, trim: true, required: true },
    created: { type: Date, default: Date.now },
    image: { type: String },
    url:  { type: String },
    edited: { type: Date },
});

// Populate
// CharacterSchema.pre('findOne', Populate('forms')).pre('find', Populate('forms'))
// CharacterSchema.pre('findOne', Populate('originPlanet')).pre('find', Populate('originPlanet'))

module.exports = mongoose.model("Character", CharacterSchema);
