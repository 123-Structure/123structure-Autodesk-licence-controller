import { Schema } from "mongoose";
import { ILicence } from "../data/interfaces/ILicence";

export const licenceSchema = new Schema<ILicence>(
  {
    userId: {
      type: String,
      require: true,
      unique: true,
    },
    licence: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
