import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../../components/Header";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { it, vi } from "vitest";

vi.mock("react-router-dom", () => ({
    useNavigate: vi.fn(),
    BrowserRouter: vi.fn(({ children }) => <div>{children}</div>),
}));

describe("Header component", () => {
    let mockNavigate;

    beforeEach(() => {
        vi.clearAllMocks();
        mockNavigate = vi.fn();
        useNavigate.mockReturnValue(mockNavigate);
    });

    it("should display website title", () => {
        render(
            <Router>
                <Header />
            </Router>
        );
        screen.debug();
        expect(screen.getByText("HoopIntel")).toBeInTheDocument();
    });

    it("should display website logo", () => {
        render(
            <Router>
                <Header />
            </Router>
        );
        const image = screen.getByRole("img");
        expect(image).toHaveAttribute("src", "../public/bball.png");
    });

    it("should display search bar", () => {
        render(
            <Router>
                <Header />
            </Router>
        );
        const searchBar = screen.getByLabelText("Search players");
        expect(searchBar).toBeInTheDocument();
    });

    it("should navigate to home page when clicked", () => {
        render(
            <Router>
                <Header />
            </Router>
        );
        const title = screen.getByText("HoopIntel");
        fireEvent.click(title);
        expect(mockNavigate).toHaveBeenCalledWith("/");
    });

    it("should update input value when typing", () => {
        render(
            <Router>
                <Header />
            </Router>
        );
        const input = screen.getByLabelText("Search players");
        expect(input).toHaveValue("");
        fireEvent.change(input, { target: { value: "stephen" } });
        expect(input).toHaveValue("stephen");
    });

    it("should navigate to search page with player name on form submission", () => {
        render(
            <Router>
                <Header />
            </Router>
        );
        const form = screen.getByRole("form");
        const input = screen.getByLabelText("Search players");
        fireEvent.change(input, { target: { value: "stephen" } });
        expect(input).toHaveValue("stephen");
        fireEvent.submit(form);
        expect(mockNavigate).toHaveBeenCalledWith("/search", {
            state: {
                playerName: "stephen",
            },
        });
    });
});
