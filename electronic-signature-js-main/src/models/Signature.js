import mongoose from "mongoose";

const SignatureSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  teamOrPosition: {
    type: String,
    required: true,
  },
  enterprise: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  site: {
    type: String,
    required: false,
  },
  term: {
    type: Boolean,
    required: true,
  },
});

const SignatureModel = mongoose.model("SignatureModel", SignatureSchema);

export { SignatureModel };
