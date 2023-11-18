const express = require('express');
const path = require("path");
const urlRoute = require('./routes/url');
const { connectToMongoDB } = require('./connect');
const URL = require('./models/url');
const staticRoute = require("./routes/staticRouter");

const app = express();
const PORT = 8001;


connectToMongoDB('mongodb://127.0.0.1:27017/short-url')
    .then(() => console.log('Mongo DB connected'));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// for json data
app.use(express.json())
// for form data
app.use(express.urlencoded({ extended: false }));
app.use('/url', urlRoute);
app.use("/", staticRoute);
app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({ shortId },
        { $push: { visitHistory: { timestamp: Date.now() } } }
    );
    res.redirect(entry.redirectUrl);
})
app.listen(PORT, () => { console.log(`Server started on PORT ${PORT}`) })