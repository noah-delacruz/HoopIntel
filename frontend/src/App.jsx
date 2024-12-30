import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import SearchResults from "../components/SearchResults";
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<SearchResults />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
