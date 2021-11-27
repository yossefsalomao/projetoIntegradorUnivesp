import mongoose from "mongoose";

import { DatabaseError } from "../errors/index.js";

/**
 * @public
 */
class Connect {
  /**
   * @public
   * @memberof Connect
   * @method connect
   * @returns {void}
   * @throws {DatabaseError}
   */
  connect() {
    mongoose.connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.mkqdf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
      (err) => {
        if (err) {
          throw new DatabaseError(err);
        } else {
          console.info("Database is connected");
        }
      }
    );
  }
}

export default new Connect();
