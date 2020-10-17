import axios from "axios";

class Api {
  baseUrl = "https://conduit.productionready.io/api/";
  async getArticles(offset = 0) {
    return await axios
      .get(this.baseUrl + `articles?limit=5&offset=${offset}`)
      .then((a) => {
        // console.log(a);
        return a.data;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  async getSlug(slug) {
    return await axios
      .get(this.baseUrl + `articles/${slug}`)
      .then((a) => {
        return a.data;
      })
      .catch((e) => {
        console.log(e);
      });
  }
}

const blogApi = new Api();

export default blogApi;
