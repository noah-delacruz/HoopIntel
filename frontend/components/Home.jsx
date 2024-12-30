import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(input);
        navigate("/search", { state: { playerName: input } });
    };

    return (
        <>
            <div className="homeContainer">
                <Typography variant="h4" gutterBottom>
                    HoopIntel
                </Typography>

                <form onSubmit={handleSubmit}>
                    <TextField
                        id="outlined-basic"
                        label="Search players"
                        variant="outlined"
                        onChange={handleChange}
                    />
                </form>
            </div>
        </>
    );
}
