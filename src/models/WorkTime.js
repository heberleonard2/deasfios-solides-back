const mongoose = require('mongoose');

const WorkTimeSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['entrance', 'exit'],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('WorkTime', WorkTimeSchema);
