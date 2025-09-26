const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const Listing = require("./models/listing.js");
const Tesseract = require('tesseract.js');

const MONGO_URL = 'mongodb://localhost:27017/userdatabase';

main().then(() => console.log('Connected to MongoDB'))
async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get("/testlisting", async (req, res) => {
    let sampleListing = new Listing({
        name: "John Doe",
        emailid: "johndoe@gmail.com",
        Password: 123456,
    });
    sampleListing.save()
        .then(() => res.send('Listing saved!'))
        .catch(err => res.status(500).send(err.message));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});