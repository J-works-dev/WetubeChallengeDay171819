/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";
import routes from "./routes";

export const home = async (req, res) => {
  try {
    // console.log(Movie);
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
  // console.log(title, year, rating, synopsis, genreArray);
  const newMovie = await Movie.create({
    title,
    year,
    rating,
    synopsis,
    genres: genreArray
  });
  // console.log(newMovie);
  res.redirect(`/${newMovie.id}`);
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
    await Movie.findByIdAndUpdate(id, {
      title,
      year,
      rating,
      synopsis,
      genres: genreArray
    });
    res.redirect(routes.movieDetail(id));
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
      res.render("search", {
        movies,
        pageTitle: `Searching for Year after ${year}`
      });
    } else if (rating) {
      const movies = await Movie.find({ rating: { $gte: Number(rating) } });
      res.render("Search", {
        movies,
        pageTitle: `Searching for Rating over ${rating}`
      });
    } else {
      res.render("Home", { pageTitle: "No result" });
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
    await Movie.findByIdAndDelete(id);
  } catch (error) {}
  res.redirect("/");
};
