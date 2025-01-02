import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function Header() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(input);
        navigate("/search", { state: { playerName: input } });
    };
    return (
        <div className="headerContainer">
            <img className="headerBallImage" src="../public/bball.png" />
            <Typography
                className="headerTitle"
                onClick={handleClick}
                variant="h4"
                gutterBottom
            >
                HoopIntel
            </Typography>

            <form aria-label="form" onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="Search players"
                    variant="outlined"
                    onChange={handleChange}
                />
            </form>
        </div>
    );
}
