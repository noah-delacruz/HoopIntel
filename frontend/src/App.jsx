import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import SearchResults from "../components/SearchResults";
import PlayerCard from "../components/PlayerCard";
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<SearchResults />} />
                    <Route path="/player" element={<PlayerCard />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
