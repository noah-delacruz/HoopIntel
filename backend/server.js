import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { BalldontlieAPI } from "@balldontlie/sdk";

dotenv.config();

const app = express();
app.use(cors());

const api = new BalldontlieAPI({ apiKey: process.env.NBA_API_KEY });
// const teams = await api.nba.getPlayers(); // https://api.balldontlie.io/v1/players?search=stephen
// console.log(teams);

app.get("/", (req, res) => {
    res.send("Root");
});

app.get("/search/:name", async (req, res) => {
    let { name } = req.params;
    // let response = await axios.get(
    //     `https://api.balldontlie.io/v1/players?search=${name}`,
    //     {
    //         headers: {
    //             Authorization: process.env.NBA_API_KEY,
    //         },
    //     }
    // );

    // Search for players
    const players = await api.nba.getPlayers({
        search: name,
        per_page: 100,
    });
    res.json(players);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
