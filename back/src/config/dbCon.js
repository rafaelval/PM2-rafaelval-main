const mongoose = require("mongoose");
const { DB_USER, DB_PASSWORD, DB_URL } = process.env;

const dbCon = async () => {
  await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_URL}`);
};

module.exports = dbCon;
