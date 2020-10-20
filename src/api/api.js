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
        console.log(e.response.data);
        let message = 'Som sing is wrong ';
        if (e.response.data.errors['email or password'])
          message = 'Email or password ' + e.response.data.errors['email or password'][0];
        return { error: message };
      });
  }

  async createAccaunt(user) {
    console.log(user);

    return await axios
      .post(this.baseUrl + 'users', { user })
      .then((a) => {
        return a.data;
      })
      .catch((e) => {
        console.log(e.response.data);
        let message = 'Som sing is wrong ';
        if (e.response.data.errors['email or password'])
          message = 'Email or password ' + e.response.data.errors['email or password'][0];
        return { error: message };
      });
  }
}

const blogApi = new Api();
window.blogApi = blogApi;
export default blogApi;
