import { Request, Response } from "express";
import { Types } from "mongoose";
import Licence from "../models/licence.model";

// GET a single licence
export const validateLicence = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "⛔ No such licence" });
  }

  const customer = await Licence.findById(id);

  if (!customer) {
    return res.status(404).json({ error: "⛔ No such licence" });
  }

  res.status(200).json(customer);
};

// GET a single licence
export const generateLicence = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "⛔ No such licence" });
  }

  const customer = await Licence.findById(id);

  if (!customer) {
    return res.status(404).json({ error: "⛔ No such licence" });
  }

  res.status(200).json(customer);
};
