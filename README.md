# Memory Card

This project is an interactive memory card game built with React and Tailwind CSS. Players click unique Pokémon cards without repeating to increase their score, with the goal of achieving the highest score possible.

## Features

* **Dynamic Card Display**: Renders a grid of Pokémon cards with images and names, fetched from the PokéAPI.
* **Score Tracking**: Tracks the current score (incremented per unique card click) and best score (highest achieved).
* **Card Shuffling**: Cards are shuffled randomly on page load and after each click to challenge memory.

## How to Play

* Click each Pokémon card once to increase your score by one point.
* Avoid clicking the same card twice, as this resets your current score to zero and reshuffles the cards.
* The cards shuffle randomly after every click and on page load, testing your memory to avoid duplicates.

## Tech Stack

* **React**: Manages component-based UI, state, and side effects.
* **Tailwind CSS**: Provides utility-first styling.
* **JavaScript Fetch API**: Retrieves Pokémon data from the PokéAPI.

## What I Learned

* **React Component Architecture**: Organized the app into reusable components (Header, Scoreboard, GameBoard, Card) for modularity and maintainability.
* **Asynchronous Data Fetching**: Used the Fetch API with Promise.all to efficiently retrieve multiple Pokémon data points.
* **State Management with Hooks**: Leveraged useState and useEffect to manage game state (cards, scores) and handle side effects like API calls.
* **Dynamic UI Updates**: Implemented real-time shuffling and score updates without page reloads.
