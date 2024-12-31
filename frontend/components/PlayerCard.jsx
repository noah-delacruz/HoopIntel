import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";

export default function PlayerCard() {
    const location = useLocation();
    const playerData = location.state.playerData;

    const [favorite, setFavorite] = useState(false);

    const handleClick = () => {
        setFavorite(!favorite);
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
            <div className="playerCardContainer">
                <Card sx={{ minWidth: 300 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {playerData.first_name} {playerData.last_name}
                            <IconButton onClick={handleClick}>
                                {!favorite ? <StarBorderIcon /> : <StarIcon />}
                            </IconButton>
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
