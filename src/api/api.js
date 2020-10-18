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
}

const blogApi = new Api();

export default blogApi;
