import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Player from "./Player";
import Header from "./Header";

export default function SearchResults() {
    const location = useLocation();
    const playerName = location.state?.playerName || "No player name given";
    console.log(playerName);
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (!playerName || playerName === "No player name given") {
                setLoading(false);
                return;
            }
            try {
                setLoading(true);
                const response = await axios.get(
                    `http://localhost:3000/search/${playerName}`
                );
                console.log(response.data.data);
                setResults(response.data.data);
            } catch (err) {
                console.error(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [playerName]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header />
            {results.length > 0 ? (
                <ul>
                    {results.map((player) => (
                        <li key={player.id}>
                            <Player data={player} />
                        </li>
                    ))}
                </ul>
            ) : (
                "No player(s) found"
            )}
            <ul>
                {results.map((player) => (
                    <li key={player.id}>
                        <Player data={player} />
                    </li>
                ))}
            </ul>
        </>
    );
}
