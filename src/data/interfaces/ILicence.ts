import { Types } from "mongoose";

export interface ILicence {
  _id: Types.ObjectId;
  userId: string;
  licence: string;
}
