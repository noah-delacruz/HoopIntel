import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Home() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/search", { state: { playerName: input } });
    };

    return (
        <>
            <div className="homeContainer">
                <Typography variant="h4" gutterBottom>
                    <img className="homeBallImage" src="/bball.png" />
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
                <a href="https://github.com/noah-delacruz/HoopIntel">
                    <GitHubIcon></GitHubIcon>
                </a>{" "}
                <Typography variant="p" gutterBottom>
                    Search requests may take a little longer to load initially
                    as the backend runs on a free-tier service and may need to
                    wake up. Thanks for your patience!
                </Typography>
            </div>
        </>
    );
}
