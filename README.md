# Lab for REST in SPA Demo

This is a student project for learning REST in SPA concepts!

## Concepts

1.  What domain should I send my requests to, in order to hit their API?
    Ans: https://api.themoviedb.org/3/

2.  What endpoints (paths) should I append to the domain in order to get the list of science fiction (etc.) movies?
    Ans:

        1. Get the Genre Id from
        https://api.themoviedb.org/3/genre/movie/list for Science Fiction

        2. Endpoint to use
        https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=878&api_key=a05e7d6beb2f7a3517a89a11bbe7d381

3.  What format will the data come back in (JSON / XML), and what will be the structure of that data? JSON

4.  How will I send my API key, so that the API will recognize me as a registered user? Pass as a param to url

## Installation Steps

- Clone this project `git clone https://github.com/ankurbag/lab-rest-spa-demo.git`
- Go to folder `cd lab-rest-spa-demo`
- Run `npm install` or `npm i`
- Run `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
