const APIURL = "http://localhost:4000";

export const Endpoints = {
  user: {
    signup: `${APIURL}/user/signup`,
    login: `${APIURL}/user/login`,
  },
  movie: {
    getall: `${APIURL}/movie`,
    delete: `${APIURL}/movie/`,
    create: `${APIURL}/add`,
    update: `${APIURL}/update/`,
  },
};
