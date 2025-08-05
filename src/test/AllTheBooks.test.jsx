import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import App from "../App";
import AllTheBooks from "../components/AllTheBooks";
import * as useSelected  from "../context/selectedContext";

vi.mock('../components/context/selectedContext.jsx')

it('renders five cards', ()=> {
    const books = [
{
    "asin": "0316438960",
    "title": "The Last Wish: Introducing the Witcher",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
    "price": 9.59,
    "category": "fantasy"
  },
  {
    "asin": "0316389706",
    "title": "Sword of Destiny (The Witcher)",
    "img": "https://images-na.ssl-images-amazon.com/images/I/91uxJwnolDL.jpg",
    "price": 10.39,
    "category": "fantasy"
  },
  {
    "asin": "0786966246",
    "title": "D&D MORDENKAINEN'S TOME OF FOES (Dungeons & Dragons)",
    "img": "https://images-na.ssl-images-amazon.com/images/I/8147MOLG%2BoL.jpg",
    "price": 27.94,
    "category": "fantasy"
  },
  {
    "asin": "1945683694",
    "title": "Destiny Grimoire Anthology, Volume II: Fallen Kingdoms",
    "img": "https://images-na.ssl-images-amazon.com/images/I/91IHwcEy2DL.jpg",
    "price": 19.92,
    "category": "fantasy"
  },
  {
    "asin": "0786966254",
    "title": "D&D Waterdeep Dragon Heist HC (Dungeons & Dragons)",
    "img": "https://images-na.ssl-images-amazon.com/images/I/81Sfnxpke4L.jpg",
    "price": 34.61,
    "category": "fantasy"
  }]

  vi.spyOn(useSelected, 'useSelected').mockReturnValue({selected: 'prova', setSelected: vi.fn()})
    render(<AllTheBooks filteredBook={books} colorText="white" theme="dark" />)
    expect(screen.getAllByRole('button')).toHaveLength(5)

})