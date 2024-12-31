import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

export default function Player(props) {
    const navigate = useNavigate();
    const handleClick = () => {
        console.log(props.data);
        navigate("/player", { state: { playerData: props.data } });
    };
    return (
        <>
            <List>
                <ListItem onClick={handleClick} disablePadding>
                    <ListItemButton>
                        <ListItemText
                            primary={`${props.data.first_name} ${
                                props.data.last_name
                            } (${props.data.draft_year || "Undrafted"})`}
                        />
                    </ListItemButton>
                </ListItem>
            </List>
        </>
    );
}
