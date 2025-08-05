import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";

describe("testiamo l'applicazione", () => {
    it('renders welcome', ()=> {
        render(<App />)
        expect(screen.getByText(/EpiBooks ti offre un'esperienza di lettura smart/i)).toBeInTheDocument()
    });


    it('renders five cards', ()=> {
    
    render(<App />)
    fireEvent.click(screen.queryByText('Home'))
    expect(screen.getAllByRole('button')).toHaveLength(154)

});

it('renders comment area', async ()=> {
    
    render(<App />)
    fireEvent.click(screen.queryByText('Home'))
    fireEvent.click(screen.getAllByRole('button') [0])
    expect(await screen.findByText(/Valutazione/i)).toBeInTheDocument()
})
})