const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const listingSchema = new Schema({
    name: String,
    emailid: String,
    Password: Number,
});

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;