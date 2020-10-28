const service = require("./transactions.service");

module.exports = {
  async getAll(req, res, next) {
    try {
      res.send(await service.getAll());
    } catch (e) {
      console.error(e.message || e);
    }
  },

  async getOne(req, res, next) {
    const { id } = req.params;

    try {
      res.send(await service.getOne(id));
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const { body } = req.body;

      res.send(await service.create(body));
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    const { id } = req.params;
    const { post_update } = req.body;

    try {
      res.send(await service.update(id, post_update));
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    const { id } = req.params;

    try {
      res.send(await service.delete(id));
    } catch (error) {
      next(error);
    }
  },
};
