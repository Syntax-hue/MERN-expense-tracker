const Transaction = require("./schema/transaction");

module.exports = {
  async getAll() {
    try {
      const transactions = await Transaction.find();
      return {
        success: true,
        transactions,
        count: transactions.length,
      };
    } catch (e) {
      console.error(e.message || e);
    }
  },

  async getOne(id) {
    try {
      return await Transaction.findById(id);
    } catch (e) {
      console.error(e.message);
    }
  },

  async create(text, amount) {
    try {
      const newTransaction = await Transaction.create({
        text,
        amount,
      });

      await newTransaction.save();
      return {
        success: true,
        message: "transaction created",
      };
    } catch (e) {
      if (e.name === "ValidationError") {
        const m = Object.values(e.errors).map((err) => err.message);
        return {
          status: 400,
          m,
        };
      }
      console.error(e.message);
    }
  },

  async update(id, post_update) {
    try {
      return {
        success: false,
        message: "TODO",
      };
    } catch (e) {
      console.error(e.message);
    }
  },

  async delete(id) {
    const transaction = await Transaction.findById(id);
    if (!transaction) {
      return {
        success: false,
        message: "Transaction not found",
      };
    }

    await transaction.remove();
  },
};
