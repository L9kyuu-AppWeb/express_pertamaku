const MongoClient = require("mongodb").MongoClient;
const connection = "mongodb://localhost:27017/expree_pertamaku";

const db = new MongoClient(connection, {
  useUnifiedTopology: true,
});

(async () => {
  try {
    await db.connect();
  } catch (err) {
    console.log(err);
  }
})();

module.exports = db;
