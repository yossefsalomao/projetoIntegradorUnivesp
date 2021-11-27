import httpStatus from "../enums/httpStatus.js";
import signatureService from "../services/SignatureService.js";
import { SignatureControllerError } from "../errors/index.js";

/**
 * @public
 */
class SignatureController {
  /**
   * @public
   * @memberof SignatureController
   * @method get
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {import("express").Response}
   */
  async get(req, res) {
    const { id } = req.params;

    if (!id) {
      return res
        .status(httpStatus.NOT_FOUND.status)
        .json(new SignatureControllerError("Id not informed.").message);
    } else {
      const signature = await signatureService.get(id);

      return res.status(httpStatus.OK.status).json(signature);
    }
  }

  /**
   * @public
   * @memberof SignatureController
   * @method getAll
   * @param {import("express").Request} req
   * @param {import("express").Request} res
   * @returns {[import("../models/Signature.js"]}
   */
  async getAll(req, res) {
    const allSignatures = await signatureService.getAll();

    if (!allSignatures) {
      return res
        .status(httpStatus.NOT_FOUND.status)
        .json(new SignatureControllerError("Not found signatures").message);
    } else {
      return res.status(httpStatus.OK.status).json(allSignatures);
    }
  }

  /**
   * @public
   * @memberof SignatureController
   * @method create
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {import("express").Response}
   */
  async create(req, res) {
    if (req.body) {
      const newSignature = await signatureService.create(req.body);

      return res.status(httpStatus.CREATED.status).json(newSignature);
    } else {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR.status)
        .json(new SignatureControllerError("Request body not informed").message);
    }
  }

  /**
   * @public
   * @memberof SignatureController
   * @method update
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {import("express").Response}
   */
  async update(req, res) {
    if (req.params.id && req.body) {
      const newSignature = await signatureService.update(
        req.params.id,
        req.body
      );

      return res.status(httpStatus.CREATED.status).json(newSignature);
    } else {
      return res
        .status(httpStatus.NOT_FOUND.status)
        .json(new SignatureControllerError("Request body or header not found").message);
    }
  }

  /**
   * @public
   * @memberof SignatureController
   * @method delete
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {import("express").Response}
   */
  async delete(req, res) {
    if (req.params.id) {
      const deletedSignature = await signatureService.delete(req.params.id);

      return res.status(httpStatus.NO_CONTENT.status).json(deletedSignature);
    } else {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR.status)
        .json(new SignatureControllerError("Requested id not found").message);
    }
  }
}

export default new SignatureController();
