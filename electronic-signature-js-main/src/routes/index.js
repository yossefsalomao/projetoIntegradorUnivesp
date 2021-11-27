import express from "express";

import http from "../enums/httpStatus.js";
import signatureRouter from "./SignatureRoute.js";

/**
 * @public
 */
class Router {
  /**
   * @public
   * @memberof Router
   * @constructor
   */
  constructor() {
    this.router = express.Router();

    this.setRoutes();
  }

  /**
   * @private
   * @memberof Router
   * @method setRoutes
   * @returns {void}
   */
  setRoutes() {
    this.router
      .use("/details", (req, res) => {
        res.status(http.OK.status).json({
          version: process.env.npm_package_version,
          author: process.env.npm_package_author_name,
          repository_url: process.env.npm_package_repository_url,
        });
      })
      .use("/signature", signatureRouter);
  }
}

export default new Router().router;
