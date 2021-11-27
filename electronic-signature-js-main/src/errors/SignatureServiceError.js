/**
 * @public
 * @extends {Error}
 */
export class SignatureServiceError extends Error {
    /**
     * @public
     * @memberof SignatureServiceError
     * @constructor
     * @param {string} paramName 
     */
  constructor(paramName) {
    super(`Signature service error:\n${paramName}`);
    this.name = "SignatureServiceError";
  }
}
