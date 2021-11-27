/**
 * @public
 * @extends {Error}
 */
export class SignatureControllerError extends Error {
  /**
   * @public
   * @memberof SignatureControllerError
   * @constructor
   * @param {string} paramName
   */
  constructor(paramName) {
    super(`Signature controller error:\n${paramName}`);
    this.name = "SignatureControllerError";
  }
}
