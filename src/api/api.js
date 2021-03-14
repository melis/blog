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
      return {
        error: JSON.stringify(e.response.data)
          .replace(/[^a-zа-яё]/gi, ' ')
          .replace(/\s+/g, ' '),
      };
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
      return {
        error: JSON.stringify(e.response.data)
          .replace(/[^a-zа-яё]/gi, ' ')
          .replace(/\s+/g, ' '),
      };
    }
  }

  async signIn(user) {
    try {
      const res = await axios.post(`${this.baseUrl}users/login`, { user });
      return res.data;
    } catch (e) {
      return {
        error: JSON.stringify(e.response.data)
          .replace(/[^a-zа-яё]/gi, ' ')
          .replace(/\s+/g, ' '),
      };
    }
  }

  async createAccaunt(user) {
    try {
      const res = await axios.post(`${this.baseUrl}users`, { user });
      return res.data;
    } catch (e) {
      return {
        error: JSON.stringify(e.response.data)
          .replace(/[^a-zа-яё]/gi, ' ')
          .replace(/\s+/g, ' '),
      };
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
      return {
        error: JSON.stringify(e.response.data)
          .replace(/[^a-zа-яё]/gi, ' ')
          .replace(/\s+/g, ' '),
      };
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
      return {
        error: JSON.stringify(e.response.data)
          .replace(/[^a-zа-яё]/gi, ' ')
          .replace(/\s+/g, ' '),
      };
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
      return {
        error: JSON.stringify(e.response.data)
          .replace(/[^a-zа-яё]/gi, ' ')
          .replace(/\s+/g, ' '),
      };
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
      return {
        error: JSON.stringify(e.response.data)
          .replace(/[^a-zа-яё]/gi, ' ')
          .replace(/\s+/g, ' '),
      };
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
      return {
        error: JSON.stringify(e.response.data)
          .replace(/[^a-zа-яё]/gi, ' ')
          .replace(/\s+/g, ' '),
      };
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
      return {
        error: JSON.stringify(e.response.data)
          .replace(/[^a-zа-яё]/gi, ' ')
          .replace(/\s+/g, ' '),
      };
    }
  }
}

const blogApi = new Api();
export default blogApi;
