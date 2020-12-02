import express from "express";
import {
  home,
  movieDetail,
  getCreateMovie,
  postCreateMovie,
  getEdit,
  postEdit,
  search
} from "./movieController";

const movieRouter = express.Router();

movieRouter.get("/", home);

movieRouter.get("/create", getCreateMovie);
movieRouter.post("/create", postCreateMovie);

movieRouter.get("/:id", movieDetail);
movieRouter.get("/:id/edit", getEdit);
movieRouter.post("/:id/edit", postEdit);

movieRouter.get("/search", search);

export default movieRouter;
