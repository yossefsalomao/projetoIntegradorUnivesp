import mongoose from "mongoose";

/**
 * @public
 */
export default class BaseRepository {
  /**
   * @public
   * @memberof BaseRepository
   * @constructor
   * @param {mongoose.Model} model
   */
  constructor(model) {
    this.model = model;
  }

  /**
   * @public
   * @memberof BaseRepository
   * @method get
   * @param {string} id
   * @returns {object}
   */
  async get(id) {
    return this.model.findOne({
      _id: id,
    });
  }

  /**
   * @public
   * @memberof BaseRepository
   * @method getAll
   * @returns {[object]}
   */
  async getAll() {
    return this.model.find();
  }

  /**
   * @public
   * @memberof BaseRepository
   * @method create
   * @param {object} model
   * @returns {object}
   */
  async create(model) {
    return this.model.create(model);
  }

  /**
   * @public
   * @memberof BaseRepository
   * @method update
   * @param {string} id
   * @param {object} model
   * @returns {object}
   */
  async update(id, model) {
    return this.model.findOneAndUpdate(
      { _id: id },
      { $set: model },
      { new: true, returnOriginal: false }
    );
  }

  /**
   * @public
   * @memberof BaseRepository
   * @method delete
   * @param {string} id
   * @returns {object}
   */
  async delete(id) {
    return this.model.findOneAndDelete({ _id: id });
  }
}
