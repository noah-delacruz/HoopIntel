import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
import Header from "./Header";
import { Tooltip } from "@mui/material";

export default function PlayerCard() {
    const location = useLocation();
    const playerData = location.state.playerData;

    const [isFavorited, setIsFavorited] = useState(() => {
        const favoriteStatus =
            localStorage.getItem(`playerID_${playerData.id}`) || false; // Get favorite status of current movie if it exists, otherwise set it to false by default
        return JSON.parse(favoriteStatus); // Convert string back to original boolean form
    });

    // Toggle favorite status and update localStorage
    const handleClick = () => {
        setIsFavorited((currStatus) => {
            let newStatus = !currStatus;
            let stringNewStatus = JSON.stringify(newStatus); // Convert bool to string as local storage only holds strings
            localStorage.setItem(`playerID_${playerData.id}`, stringNewStatus);
            return newStatus; // Return the bool status instead of string status so that we can still use bool logic to display
        });
    };

    const getOrdinal = (num) => {
        const suffixes = ["th", "st", "nd", "rd"];
        const remainder = num % 100;

        if (remainder >= 11 && remainder <= 13) {
            return `${num}th`;
        }

        const lastDigit = num % 10;
        const suffix = suffixes[lastDigit] || "th";

        return `${num}${suffix}`;
    };

    return (
        <>
            <Header />
            <div className="playerCardContainer">
                <Card sx={{ minWidth: 300 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {playerData.first_name} {playerData.last_name}
                            <Tooltip
                                title={
                                    !isFavorited
                                        ? "Add to Favorites"
                                        : "Remove from Favorites"
                                }
                            >
                                <IconButton onClick={handleClick}>
                                    {!isFavorited ? (
                                        <StarBorderIcon />
                                    ) : (
                                        <StarIcon />
                                    )}
                                </IconButton>
                            </Tooltip>
                        </Typography>

                        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                            {playerData.height}, {playerData.weight} lbs
                        </Typography>
                        <Typography variant="body2">
                            Position: {playerData.position}
                            <br></br>
                            College: {playerData.college}
                            <br></br>
                            Draft: {getOrdinal(
                                playerData.draft_round
                            )} round, {getOrdinal(playerData.draft_number)}{" "}
                            pick, {playerData.draft_year} NBA Draft
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
