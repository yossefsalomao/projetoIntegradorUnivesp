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
      `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`,
      {
        user: process.env.MONGO_USER,
        pass: process.env.MONGO_PASS,
        dbName: process.env.MONGO_COLLECTION,
      },
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
