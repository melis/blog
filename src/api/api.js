import { message } from 'antd';
import axios from 'axios';

class Api {
  baseUrl = 'https://conduit.productionready.io/api/';

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
    return await axios
      .post(this.baseUrl + 'users/login', { user })
      .then((a) => {
        return a.data;
      })
      .catch((e) => {
        return { error: e.message };
      });
  }
  async updUser(user, token) {
    return await axios
      .put(
        this.baseUrl + 'user',
        {
          user,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        },
      )
      .then((a) => {
        console.log(a.data);
        return a.data;
      })
      .catch((e) => {
        console.dir(e);
        return { error: e.message };
      });
  }

  async createAccaunt(user) {
    return await axios
      .post(this.baseUrl + 'users', { user })
      .then((a) => {
        return a.data;
      })
      .catch((e) => {
        return { error: e.message };
      });
  }
}

const blogApi = new Api();
window.blogApi = blogApi;

export default blogApi;
