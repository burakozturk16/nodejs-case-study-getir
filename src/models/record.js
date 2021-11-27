const mongoose = require('mongoose');

const recordSchema = mongoose.Schema(
  {
    createdAt: {
      type: Date,
    },
    counts: [
      {
        type: Number,
      },
    ],
    key: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Query for records
 * @param {Object} filters - Filters for aggregating data from Mongo
 * @returns {Promise<QueryResult>}
 */
recordSchema.statics.getBetween = async function (filters) {
  /* istanbul ignore next */
  const results = await this.aggregate([
    {
      $match: {
        createdAt: {
          $gte: new Date(filters.startDate),
          $lt: new Date(filters.endDate),
        },
      },
    },
    {
      $project: {
        _id: 0,
        key: 1,
        createdAt: 1,
        totalCount: {
          $sum: '$counts',
        },
      },
    },
    {
      $match: {
        totalCount: {
          $gte: filters.minCount,
          $lte: filters.maxCount,
        },
      },
    },
  ]).sort({ createdAt: 'desc' });

  /* istanbul ignore next */
  return results;
};

/**
 * @typedef Record
 */
const Record = mongoose.model('Record', recordSchema);

module.exports = Record;
