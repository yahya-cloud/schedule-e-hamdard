import { RequestHandler } from "express";
import utilLib from "../libs/utilLib";
import { batch } from "../services/db";

const getBatches: RequestHandler = async (req, res) => {
  try {
    let data = await batch.getBatches();
    res.status(200).json({ data, message: "" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const createBatch: RequestHandler = async (req, res) => {
  try {
    let { name } = req.body;

    utilLib.checkMissingFieldsAndType({ name }, { name: "string" });

    let data = await batch.createBatch(req.body);
    res.status(200).json({ data, message: "Batch Created Successfully" });
  } catch (error) {
    //@ts-ignore
    res.status(400).json({ message: error.message });
  }
};

const addSection: RequestHandler = async (req, res) => {
  try {
    const { _id, section } = req.body;

    utilLib.checkMissingFieldsAndType(
      { _id, section },
      { _id: "string", section: "string" }
    );

    let data = await batch.addSection({ _id, section });
    res.status(200).json({ data, message: "Section Added Successfully" });
  } catch (error) {
    //@ts-ignore
    res.status(400).json({ message: error.message });
  }
};

const removeAll: RequestHandler = async (req, res) => {
  try {
    let data = await batch.removeAll({});
    res.status(200).json({ data, message: "" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export {getBatches, createBatch, addSection, removeAll}