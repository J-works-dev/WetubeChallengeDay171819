import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteTitle = "Jworks Movies";
  res.locals.routes = routes;
  next();
};
