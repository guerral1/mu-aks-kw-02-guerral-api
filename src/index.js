import express from 'express';
import cors from 'cors';
import employeesRoutes from './routes/employeesRoutes';
import detailsRoutes from './routes/detailsRoutes';

const PORT = 3001;

let isValid = true;
if (
  process.env.USE_DB === 'true' &&
  (!process.env.DB_SERVER ||
    !process.env.DB_PORT ||
    !process.env.DB_USER ||
    !process.env.DB_PASSWORD ||
    !process.env.DB_DATABASE)
) {
  console.error('ERROR: You specified using a DB but you have DB parameters missing.');
  isValid = false;
}

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send(`Welcome to the employee service - IsValid = ${isValid}`));
app.use('/employees', employeesRoutes);
app.use('/details', detailsRoutes);

app.listen(PORT, () => console.log(`REST API running on port ${PORT}`));
