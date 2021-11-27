import mongoose from "mongoose";

import BaseRepository from "./BaseRepository.js";
import { SignatureModel } from "../models/index.js";

/**
 * @public
 * @extends BaseRepository
 */
class SignatureRepository extends BaseRepository {
  /**
   * @public
   * @memberof SignatureRepository
   * @constructor
   * @param {mongoose.Models} model
   */
  constructor(signatureModel) {
    super(signatureModel);
  }
}

export default new SignatureRepository(SignatureModel);
