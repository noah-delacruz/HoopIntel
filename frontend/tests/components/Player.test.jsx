import { render, screen } from "@testing-library/react";
import Player from "../../components/Player";
import SearchResults from "../../components/SearchResults";
import { BrowserRouter as Router } from "react-router-dom";

describe("Player component", () => {
    it("should render players first name, last name, and draft year", () => {
        const testPlayer = {
            first_name: "stephen",
            last_name: "curry",
            draft_year: "2009",
        };
        render(
            <Router>
                <Player data={testPlayer} />
            </Router>
        );
        screen.debug();
        const listItem = screen.getByRole("listitem");
        expect(listItem).toHaveTextContent(/stephen/i);
        expect(listItem).toHaveTextContent(/curry/i);
        expect(listItem).toHaveTextContent(/2009/i);
    });

    it("should render undrafted if draft year is not given", () => {
        const testPlayer = {
            first_name: "stephen",
            last_name: "curry",
        };
        render(
            <Router>
                <Player data={testPlayer} />
            </Router>
        );
        const listItem = screen.getByRole("listitem");
        expect(listItem).toHaveTextContent(/stephen/i);
        expect(listItem).toHaveTextContent(/curry/i);
        expect(listItem).toHaveTextContent(/undrafted/i);
    });
});
