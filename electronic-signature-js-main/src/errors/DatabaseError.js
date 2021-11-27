/**
 * @public
 * @extends {Error}
 */
export class DatabaseError extends Error {
  /**
   * @public
   * @memberof DatabaseError
   * @constructor
   * @param {string} paramName
   */
  constructor(paramName) {
    super(`Database not isn't connected\n${paramName}`);
    this.name = "DatabaseError";
  }
}
