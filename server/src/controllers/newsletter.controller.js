import express from "express";
import { mailer } from "../utils/newsletter.util.js";
import {
  getAllUsers,
  sendMailToSubscribedUsers,
} from "../services/newsletter.service.js";

const router = express.Router();

router.get("/", getAllUsers);

router.get("/email", mailer);

router.post("/newsletter", sendMailToSubscribedUsers);

export default router;
