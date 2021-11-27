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
    super(`Signature controller error: ${paramName}`);
    this.name = "SignatureControllerError";
  }

  get message(){
    return this.message;
  }
}
