import axios from "axios";

class Api {
  baseUrl = "https://conduit.productionready.io/api/";

  async getArticles(page = 1) {
    return await axios
      .get(this.baseUrl + `articles?limit=5&offset=${page * 5 - 5}`)
      .then((a) => {
        return a.data;
      })
      .catch((e) => {
        return { error: e.message };
      });
  }

  async getSlug(slug) {
    return await axios
      .get(this.baseUrl + `articles/${slug}`)
      .then((a) => {
        return a.data;
      })
      .catch((e) => {
        return { error: e.message };
      });
  }

  async signIn(user) {
    console.log(user);

    return await axios
      .post(this.baseUrl + "users/login", { user })
      .then((a) => {
        return a.data;
      })
      .catch((e) => {
        console.log(e.response.data.errors);
        return { error: e.message };
      });
  }

  async createAccaunt(user) {
    console.log(user);
    const obj = {
      user: {
        username: "MelisZh",
        email: "meliszhold@gmail.com",
        password: "805087Abc",
      },
    };

    return await axios
      .post(this.baseUrl + "users", obj)
      .then((a) => {
        console.log(a);
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  }
}

const blogApi = new Api();
window.blogApi = blogApi;
export default blogApi;
