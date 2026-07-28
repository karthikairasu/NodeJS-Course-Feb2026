import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../components/Login";

test("render Login component", () => {
    render(<Login />);
    const loginElement = screen.getByText(/Login Here/i);
    expect(loginElement).toBeInTheDocument();
});

test("Login with correct credentials", () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText(/Enter Email/i);
    fireEvent.change(emailInput, { target: { value: "admin@admin.com" } });
    expect(emailInput.value).toBe("admin@admin.com");
});

test("Login Successful", () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText(/Enter Email/i);
    const passwordInput = screen.getByPlaceholderText(/Enter Password/i);
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.change(emailInput, { target: { value: "admin@admin.com" } });
    fireEvent.change(passwordInput, { target: { value: "12345" } });
    fireEvent.click(loginButton);
    const messageElement = screen.getByText(/Login successful/i);
    expect(messageElement).toBeInTheDocument();
});

test("Login Failed", () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText(/Enter Email/i);
    const passwordInput = screen.getByPlaceholderText(/Enter Password/i);
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.change(emailInput, { target: { value: "12345@admin.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });
    fireEvent.click(loginButton);
    const messageElement = screen.getByText(/Login failed/i);
    expect(messageElement).toBeInTheDocument();
});