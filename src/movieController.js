/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";

export const home = async (req, res) => {
  // res.render("home", { movies: await Movie.find(), pageTitle: "Home" });
  res.render("home", { pageTitle: "Home" });
};

// export const movieDetail = async (req, res) => {
//   const {
//     params: { id }
//   } = req;
//   const movie = await Movie.findById(id);
//   if (!movie) {
//     res.render("404", { pageTitle: "Movie not found" });
//   }
//   return res.render("detail", { movie });
// };

export const getCreateMovie = (req, res) =>
  res.render("create", { pageTitle: "Add Movie" });

export const postCreateMovie = (req, res) => {
  // const {
  //   body: { title, synopsis, genres }
  // } = req;
  // const genreArray = genres.trim().split(",");
  // console.log(genreArray);
  // const movie = { title, synopsis, genres: genreArray };
  // addMovie(movie);
  res.redirect("/");
};

export const getEdit = (req, res) => {
  res.render("edit", { pageTitle: "Edit Movie" });
};
export const postEdit = (req, res) => {
  res.redirect("detail");
};
export const search = (req, res) => {
  res.render("search", { pageTitle: "Search" });
};
