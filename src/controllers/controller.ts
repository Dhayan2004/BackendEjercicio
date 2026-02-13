import { Request, Response } from "express";
import {
  createEntryService,
  getEntriesService,
  updateEntryService,
  deleteEntryService,
} from "../services/entry.service";

export const createEntry = async (req: Request, res: Response) => {
  try {
    const { content } = req.body;

    const entry = await createEntryService(content);

    return res.status(201).json(entry);
  } catch (error) {
    return res.status(500).json({
      error: "Error creando entry",
    });
  }
};

export const getEntries = async (req: Request, res: Response) => {
  try {
    const entries = await getEntriesService();

    return res.status(200).json(entries);
  } catch (error) {
    return res.status(500).json({
      error: "Error obteniendo entries",
    });
  }
};

export const updateEntry = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { content } = req.body;

    const updatedEntry = await updateEntryService(id, content);

    return res.status(200).json(updatedEntry);
  } catch (error) {
    return res.status(500).json({
      error: "Error actualizando entry",
    });
  }
};

export const deleteEntry = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    await deleteEntryService(id);

    return res.status(200).json({
      message: "Entry eliminada correctamente",
    });
  } catch (error) {
    return res.status(500).json({
      error: "Error eliminando entry",
    });
  }
};
