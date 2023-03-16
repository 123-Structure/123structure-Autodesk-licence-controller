import mongoose from "mongoose";
import { licenceSchema } from "../schemas/licence.schema";

export default mongoose.model("Licence", licenceSchema);
