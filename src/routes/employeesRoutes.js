import express from 'express';
import { getAllEmployees } from '../controllers/employeesController.js';

const router = express.Router();

router.get('/', async (req, res) => {
  console.info('/employees called...');

  try {
    const result = await getAllEmployees();
    res.json(result);
  } catch (err) {
    console.error('500: Unknown Error', err);
    res.sendStatus(500);
  }
});

export default router;
