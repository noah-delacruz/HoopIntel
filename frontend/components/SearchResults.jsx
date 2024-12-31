import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Player from "./Player";
import Header from "./Header";
import { Pagination, Typography } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function SearchResults() {
    const location = useLocation();
    const playerName = location.state?.playerName || "No player name given";
    console.log(playerName);

    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1); // Track the current page
    const playersPerPage = 10; // Number of players per page

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

    // Handle page changes
    const handlePageChange = (event, page) => {
        setCurrentPage(page); // Update current page
    };

    if (loading) {
        return (
            <Backdrop
                sx={(theme) => ({
                    color: "#fff",
                    zIndex: theme.zIndex.drawer + 1,
                })}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        );
    }
    // Calculate the players to display for the current page
    const startIndex = (currentPage - 1) * playersPerPage;
    const endIndex = startIndex + playersPerPage;
    const displayedPlayers = results.slice(startIndex, endIndex);
    return (
        <>
            <Header />
            <ul>
                {displayedPlayers.map((player) => (
                    <li key={player.id}>
                        <Player data={player} />
                    </li>
                ))}
            </ul>
            <br />
            <div className="paginationContainer">
                <Typography variant="body2">
                    {`${results.length} results`}
                </Typography>
                <Pagination
                    count={Math.ceil(results.length / playersPerPage)} // Total pages
                    page={currentPage} // Current page
                    onChange={handlePageChange} // Handle page change
                />
            </div>
        </>
    );
}
