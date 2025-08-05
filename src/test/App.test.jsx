import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";

describe("testiamo l'applicazione", () => {
  it("renderizza il componente Welcome", () => {
    render(<App />);
    expect(
      screen.getByText(/EpiBooks ti offre un'esperienza di lettura smart/i)
    ).toBeInTheDocument();
  });

  it("renderizza tante cards quanti sono i libri nel file json", () => {
    render(<App />);
    fireEvent.click(screen.queryByText("Home"));
    expect(screen.getAllByRole("button")).toHaveLength(152);
  });

  it("renderizza il componente CommentArea", async () => {
    render(<App />);
    fireEvent.click(screen.queryByText("Home"));
    fireEvent.click(screen.getAllByRole("button")[0]);
    await screen.findByText((text) => text.startsWith("Valutazione"))
  });
});
