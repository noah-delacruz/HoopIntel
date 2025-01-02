import { fireEvent, render, screen } from "@testing-library/react";
import Player from "../../components/Player";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { vi } from "vitest";

// Mock react-router-dom
vi.mock("react-router-dom", () => ({
    useNavigate: vi.fn(),
    BrowserRouter: vi.fn(({ children }) => <div>{children}</div>),
}));

describe("Player component", () => {
    let mockNavigate;

    beforeEach(() => {
        // Reset mocks and set up navigate mock
        vi.clearAllMocks();
        mockNavigate = vi.fn();
        useNavigate.mockReturnValue(mockNavigate);
    });
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

    it("should navigate to /player on click", () => {
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
        fireEvent.click(listItem);
        expect(mockNavigate).toHaveBeenCalledWith("/player", {
            state: {
                playerData: testPlayer,
            },
        });
    });
});
