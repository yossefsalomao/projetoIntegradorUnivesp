import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

import database from "./database/Connect.js";
import router from "./routes/index.js";

/**
 * @public
 */
class App {
  /**
   * @private
   * @memberof App
   * @constructor
   */
  constructor() {
    dotenv.config();

    this.app = express();

    database.connect();

    this.middlewares();
  }

  /**
   * @private
   * @memberof App
   * @method middlewares
   * @returns {void}
   */
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json({ limit: "50mb" }));
    this.app.use(
      express.urlencoded({
        parameterLimit: 100000,
        limit: "50mb",
        extended: false,
      })
    );
    this.app.use(router);
    this.app.use(express.static(path.dirname("") + "/public"));
  }
}

export default new App().app;
