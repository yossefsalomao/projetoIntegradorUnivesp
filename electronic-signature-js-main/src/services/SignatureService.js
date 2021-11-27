import { SignatureServiceError } from "../errors/index.js";
import signatureRepository from "../repositories/SignatureRepository.js";

/**
 * @public
 */
class SignatureService {
  /**
   * @public
   * @memberof SignatureService
   * @method get
   * @param {String} id
   * @returns {import("../models/Signature.js"}
   */
  async get(id) {
    if (id) {
      const signature = await signatureRepository.get(id);

      if (signature) {
        return signature;
      } else {
        return new SignatureServiceError("Register not found");
      }
    } else {
      return new SignatureServiceError("Entered id is invalid");
    }
  }

  /**
   * @public
   * @memberof SignatureService
   * @method getAll
   * @returns {[import("../models/Signature.js"]}
   */
  async getAll() {
    const allSignatures = await signatureRepository.getAll();

    if (allSignatures.length > 0) {
      return allSignatures;
    } else {
      return null;
    }
  }

  /**
   * @public
   * @memberof SignatureService
   * @method create
   * @param {import("../models/Signature.js")} model
   * @returns {import("../models/Signature.js"}
   */
  async create(model) {
    if (model) {
      const newSignature = await signatureRepository.create(model);

      return newSignature;
    } else {
      throw new SignatureServiceError(
        "impossible to register new subscription"
      );
    }
  }

  /**
   * @public
   * @memberof SignatureService
   * @method update
   * @param {string} id
   * @param {import("../models/Signature.js")} model
   * @returns {import("../models/Signature.js")}
   */
  async update(id, model) {
    if (id && model) {
      const newSignature = await signatureRepository.update(id, model);

      return newSignature;
    } else {
      throw new SignatureServiceError(
        "Incomplete data, impossible to update data"
      );
    }
  }

  /**
   * @public
   * @memberof SignatureService
   * @method delete
   * @param {string} id 
   * @returns {import("../models/Signature.js")}
   */
  async delete(id) {
    if(id) {
      return signatureRepository.delete(id);
    } else {
      throw new SignatureServiceError("Id not found");
    }
  }
}

export default new SignatureService();
