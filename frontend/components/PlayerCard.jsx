import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function PlayerCard() {
    const location = useLocation();
    const playerData = location.state.playerData;
    console.log(playerData);

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
