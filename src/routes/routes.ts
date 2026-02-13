import { Router } from "express";
import {
  createEntry,
  getEntries,
  updateEntry,
  deleteEntry,
} from "../controllers/controller";
import { validateEntry } from "../middleware/validateEntry";

const router = Router();

router.post("/", validateEntry, createEntry);
router.get("/", getEntries);
router.put("/:id", validateEntry, updateEntry);
router.delete("/:id", deleteEntry);

export default router;
