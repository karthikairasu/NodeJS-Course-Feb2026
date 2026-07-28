import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

test("render Home component", () => {
    render(<Home />);
    const homeElement = screen.getByText(/This is my home component/i);
    expect(homeElement).toBeInTheDocument();
});

test("renders Sample Output", () => {
    const { container } = render(<Home />);
    const sampleElement = container.querySelector("#sample");
    const result = sampleElement.textContent;
    expect(result).toBe("Sample Output");
});