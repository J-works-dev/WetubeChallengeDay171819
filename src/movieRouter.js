import express from "express";
import {
  home,
  movieDetail,
  getCreateMovie,
  postCreateMovie,
  getEdit,
  postEdit,
  search,
  deleteMovie
} from "./movieController";
import routes from "./routes";

const movieRouter = express.Router();

movieRouter.get("/", home);

movieRouter.get("/create", getCreateMovie);
movieRouter.post("/create", postCreateMovie);

movieRouter.get("/search", search);

movieRouter.get(routes.editMovie(), getEdit);
movieRouter.post(routes.editMovie(), postEdit);

movieRouter.get("/:id/delete", deleteMovie);

movieRouter.get(routes.movieDetail(), movieDetail);

export default movieRouter;
