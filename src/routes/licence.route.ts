import express from "express";
import {
  generateLicence,
  validateLicence,
} from "../controllers/licence.controller";

const licenceRouter = express.Router();

// Validate licence key
licenceRouter.post("/validate", validateLicence);

// Generate licence key
licenceRouter.post("/generate", generateLicence);

export default licenceRouter;
