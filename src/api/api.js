import axios from 'axios';

class Api {
  baseUrl = 'https://conduit.productionready.io/api/';

  async getArticles(page = 1, token) {
    try {
      const res = await axios.get(
        `${this.baseUrl}articles?limit=5&offset=${page * 5 - 5}`,
        token
          ? {
              headers: {
                Authorization: `Token ${token}`,
              },
            }
          : null,
      );
      return res.data;
    } catch (e) {
      return { error: JSON.stringify(e.response.data) };
    }
  }

  async getSlug(slug, token) {
    try {
      const res = await axios.get(
        `${this.baseUrl}articles/${slug}`,
        token
          ? {
              headers: {
                Authorization: `Token ${token}`,
              },
            }
          : null,
      );
      return res.data;
    } catch (e) {
      return { error: JSON.stringify(e.response.data) };
    }
  }

  async signIn(user) {
    try {
      const res = await axios.post(`${this.baseUrl}users/login`, { user });
      return res.data;
    } catch (e) {
      return { error: JSON.stringify(e.response.data) };
    }
  }

  async createAccaunt(user) {
    try {
      const res = await axios.post(`${this.baseUrl}users`, { user });
      return res.data;
    } catch (e) {
      return { error: JSON.stringify(e.response.data) };
    }
  }

  async updUser(user, token) {
    try {
      const res = await axios.put(
        `${this.baseUrl}user`,
        {
          user,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        },
      );
      return res.data;
    } catch (e) {
      return { error: JSON.stringify(e.response.data) };
    }
  }

  async createArticle(article, token) {
    try {
      const res = await axios.post(
        `${this.baseUrl}articles`,
        { article },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        },
      );
      return res.data;
    } catch (e) {
      return { error: JSON.stringify(e.response.data) };
    }
  }

  async updateArticle(article, token, slug) {
    try {
      const res = await axios.put(
        `${this.baseUrl}articles/${slug}`,
        { article },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        },
      );
      return res.data;
    } catch (e) {
      return { error: JSON.stringify(e.response.data) };
    }
  }

  async deleteArticle(slug, token) {
    try {
      await axios.delete(`${this.baseUrl}articles/${slug}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      return { error: 'Article deleted!' };
    } catch (e) {
      return { error: JSON.stringify(e.response.data) };
    }
  }

  async favoriteArticle(slug, token) {
    try {
      const res = await axios.post(
        `${this.baseUrl}articles/${slug}/favorite`,
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        },
      );
      return res.data;
    } catch (e) {
      return { error: JSON.stringify(e.response.data) };
    }
  }

  async unFavoriteArticle(slug, token) {
    try {
      const res = await axios.delete(`${this.baseUrl}articles/${slug}/favorite`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      return res.data;
    } catch (e) {
      return { error: JSON.stringify(e.response.data) };
    }
  }
}

const blogApi = new Api();
export default blogApi;
