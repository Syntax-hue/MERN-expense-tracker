module.exports = {
  async getAll() {
    try {
      return "get all";
    } catch (e) {
      console.error(e.message || e);
    }
  },

  async getOne(id) {
    try {
      return "get One";
    } catch (e) {
      console.error(e.message);
    }
  },

  async create(post_body) {
    try {
      console.log("create");
    } catch (e) {
      console.error(e.message);
    }
  },

  async update(id, post_update) {
    try {
      console.log("update");
    } catch (e) {
      console.error(e.message);
    }
  },

  async delete(id) {
    console.log("delete");
  },
};
