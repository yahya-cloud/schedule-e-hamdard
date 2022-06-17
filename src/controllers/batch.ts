import { RequestHandler } from "express";
import * as batch from "../models/batch";

export const getBatches: RequestHandler = async (req, res) => {
  try {
    let result = await batch.getBatches({});
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const createBatch: RequestHandler = async (req, res) => {
  try {
    let result = await batch.createBatch(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const addSection: RequestHandler = async (req, res) => {
  try {
    const { _id, sections } = req.body;
    let result = await batch.updateBatch({ _id }, { sections });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const removeAll: RequestHandler = async (req, res) => {
  try {
    let result = await batch.removeAll({});
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
