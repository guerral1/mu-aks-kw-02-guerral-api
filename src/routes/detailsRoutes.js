import express from 'express';
import { getDetailsById } from '../controllers/detailsController.js';

const router = express.Router();

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  console.info(`/details/${id} called...`);

  try {
    const result = await getDetailsById(id);
    res.json(result);
  } catch (err) {
    if (err.message === `Not Found`) {
      console.warn('404: Not Found');
      res.sendStatus(404);
    } else {
      console.error('500: Unknown Error', err);
      res.sendStatus(500);
    }
  }
});

export default router;
