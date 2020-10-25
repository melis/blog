import axios from 'axios';

class Api {
  baseUrl = 'https://conduit.productionready.io/api/';

  async getArticles(page = 1, token) {
    return await axios
      .get(
        this.baseUrl + `articles?limit=5&offset=${page * 5 - 5}`,
        token
          ? {
              headers: {
                Authorization: `Token ${token}`,
              },
            }
          : null,
      )
      .then((a) => {
        return a.data;
      })
      .catch((e) => {
        console.dir(e);
        return { error: e.message };
      });
  }

  async getSlug(slug, token) {
    return await axios
      .get(
        this.baseUrl + `articles/${slug}`,
        token
          ? {
              headers: {
                Authorization: `Token ${token}`,
              },
            }
          : null,
      )
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

  async createArticle(article, token) {
    return await axios
      .post(
        this.baseUrl + 'articles',
        { article },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        },
      )
      .then((a) => {
        return a.data;
      })
      .catch((e) => {
        console.dir(e);
        return { error: e.message };
      });
  }
  async updateArticle(article, token, slug) {
    return await axios
      .put(
        this.baseUrl + `articles/${slug}`,
        { article },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        },
      )
      .then((a) => {
        return a.data;
      })
      .catch((e) => {
        return { error: e.message };
      });
  }
  async deleteArticle(slug, token) {
    return await axios
      .delete(this.baseUrl + 'articles/' + slug, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((a) => {
        return { error: 'Article deleted!' };
      })
      .catch((e) => {
        console.dir(e);
        return { error: e.message };
      });
  }
  async favoriteArticle(slug, token) {
    return await axios
      .post(
        this.baseUrl + `articles/${slug}/favorite`,
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        },
      )
      .then((a) => {
        return a.data;
      })
      .catch((e) => {
        console.dir(e);
        return { error: e.message };
      });
  }
  async unFavoriteArticle(slug, token) {
    return await axios
      .delete(this.baseUrl + `articles/${slug}/favorite`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((a) => {
        return a.data;
      })
      .catch((e) => {
        console.dir(e);
        return { error: e.message };
      });
  }
}

const blogApi = new Api();
window.blogApi = blogApi;

export default blogApi;
