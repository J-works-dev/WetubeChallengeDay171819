const routes = {
  movieDetail: (id) => {
    if (id) {
      return `/${id}`;
    } else {
      return "/:id";
    }
  },
  editMovie: (id) => {
    if (id) {
      return `${id}/edit`;
    } else {
      return "/:id/edit";
    }
  },
  deleteMovie: (id) => {
    if (id) {
      return `${id}/delete`;
    } else {
      return "/:id/delete";
    }
  }
};

export default routes;
