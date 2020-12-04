/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";

export const home = async (req, res) => {
  try {
    console.log(Movie);
    const movies = await Movie.find({});
    res.render("home", { movies, pageTitle: "Home" });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", movies: [] });
  }
};

export const movieDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      res.render("404", { pageTitle: "Movie not found" });
    }
    return res.render("detail", { pageTitle: movie.title, movie });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
};

export const getCreateMovie = (req, res) =>
  res.render("create", { pageTitle: "Add Movie" });

export const postCreateMovie = async (req, res) => {
  const {
    body: { title, year, rating, synopsis, genres }
  } = req;
  const genreArray = genres.trim().split(",");
  console.log(title, year, rating, synopsis, genreArray);
  const newMovie = await Movie.create({
    title,
    year,
    rating,
    synopsis,
    genres: genreArray
  });
  console.log(newMovie);
  res.redirect("/");
};

export const getEdit = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const movie = await Movie.findById(id);
    res.render("edit", { pageTitle: `Edit ${movie.title}`, movie });
  } catch (error) {
    res.redirect("/");
  }
};
export const postEdit = async (req, res) => {
  const {
    params: { id },
    body: { title, year, rating, synopsis, genres }
  } = req;
  const genreArray = genres.trim().split(",");
  try {
    await Movie.findOneAndUpdate(
      { _id: id },
      { title, year, rating, synopsis, genres: genreArray }
    );
    res.redirect();
  } catch (error) {
    res.redirect("/");
  }
};
export const search = async (req, res) => {
  const {
    query: { year, rating }
  } = req;
  let movies = [];
  try {
    // movies = await Movie.find({ year: { $gte: year}})
    if (year) {
      movies = await Movie.find({ year: { $gte: Number(year) } });
      res.render("search", { movies, pageTitle: `Searching for ${year}` });
    } else if (rating) {
      const movies = await Movie.find({ rating: { $gte: Number(rating) } });
      res.render("home", { movies, pageTitle: `Searching for ${rating}` });
    } else {
      res.render("search", { pageTitle: "No result" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteMovie = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    await Movie.findOneAndRemove({ _id: id });
  } catch (error) {}
  res.redirect("/");
};
