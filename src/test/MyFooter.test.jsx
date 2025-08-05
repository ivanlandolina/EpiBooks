import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import MyFooter from "../components/MyFooter";

it('renders the content', () =>{ //oppure test al posto di it
    // rendering del componente da testare
    render(<MyFooter />);

    // selezioniamo i componenti dal dom virtuale
    // screen.getByText(/© 2025 EpiBooks. All rights reserved./i) // regex con i per non fare differenza tra maiusc e minusc
    expect(screen.getByText(/© 2025 EpiBooks. All rights reserved./i)).toBeInTheDocument() //si può scrivere anche in questo modo (più esteso)


})