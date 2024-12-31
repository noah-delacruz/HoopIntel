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

// let response = await axios.get(
//     `https://api.balldontlie.io/v1/players?search=${name}`,
//     {
//         headers: {
//             Authorization: process.env.NBA_API_KEY,
//         },
//     }
// );

// // Search for players
// const players = await api.nba.getPlayers({
//     search: name,
//     per_page: 100,
// });
app.get("/search/:name", async (req, res) => {
    let { name } = req.params;
    name = name.trim();

    // Split the name into potential first and last name
    const [firstName, ...lastNameParts] = name.split(" ");
    const lastName = lastNameParts.join(" "); // Rejoin the rest in case last name has spaces

    let players;
    if (lastName) {
        // If both first and last name are provided, search using both
        players = await api.nba.getPlayers({
            first_name: firstName,
            last_name: lastName,
            perPage: 100,
        });

        // If no players found with the full name, fallback to searching by first name only
        if (players.data.length === 0) {
            players = await api.nba.getPlayers({
                search: name,
                per_page: 100,
            });
        }
    } else {
        players = await api.nba.getPlayers({
            search: name,
            per_page: 100,
        });
    }
    res.status(200).json(players);
});

export default app;
