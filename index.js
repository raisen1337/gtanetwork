const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = 3000;

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(
            "https://cdn.noping.ro/gtanetworkpage/index.htm"
        );
        const html = response.data;

        res.send(html);
    } catch (error) {
        res.status(500).send("Error fetching and rendering HTML");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
