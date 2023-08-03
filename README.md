# PrimeFlix

PrimeFlix is a web application that displays a list of the top 10 movies currently playing in theaters. It fetches movie data from The Movie Database (TMDb) API and allows users to access more details about each movie by clicking on the "Acessar" link. The app is built using React and React Router.

## Live Demo

You can try out PrimeFlix [here](https://primeflix-danilosantilli.netlify.app).

## How to Use

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running `npm install`.
3. Start the development server by running `npm start`.
4. Open your web browser and navigate to `http://localhost:3000` to view the app.

## Features

- Fetches movie data from TMDB API.
- Displays a list of the top 10 movies currently playing in theaters.
- Provides a link to access more details about each movie.

## Code Explanation

- The app uses React's `useEffect` and `useState` hooks to fetch and manage movie data from the TMDB API.
- The `loadFilmes` function fetches movie data using the TMDB API key and sets the state with the top 10 movies.
- While the movies are being loaded, a loading message is displayed.
- Once the movies are loaded, they are rendered in a list with their titles and poster images.
- Each movie item is a clickable link that takes users to a detailed page about the movie.

## Dependencies

- React: `^17.0.2`
- React Router: `^5.3.0`
- Axios: `^0.22.0`

## TMDB API

To access movie data, this app uses The Movie Database (TMDb) API. You can find more information about the API and how to obtain an API key [here](https://www.themoviedb.org/documentation/api).
