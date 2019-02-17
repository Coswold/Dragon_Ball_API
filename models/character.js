const mongoose = require("mongoose");
const Populate = require("../util/autopopulate");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name: { type: String, trim: true, required: true },
    forms: [{ type: Schema.Types.ObjectId, ref: 'Character' }],
    species: { type: String, trim: true, default: 'unknown' },
    status: { type: String, trim: true, default: 'unknown' },
    originPlanet: { type: mongoose.Schema.ObjectId, ref: 'Planet' },
    gender: { type: String, trim: true, default: 'unknown' },
    series: { type: String, trim: true, required: true },
    created: { type: Date, default: Date.now },
    image: String,
    url: String,
    edited: Date
});

// Populate
CharacterSchema.pre('findOne', Populate('forms')).pre('find', Populate('forms'))
CharacterSchema.pre('findOne', Populate('originPlanet')).pre('find', Populate('originPlanet'))

module.exports = mongoose.model("Character", CharacterSchema);
