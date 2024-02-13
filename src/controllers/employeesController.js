import EmployeesRepo from '../repositories/EmployeesRepo.js';
import EmployeesMockRepo from '../mockRepositories/EmployeesMockRepo.js';

const repo = process.env.USE_DB === 'true' ? new EmployeesRepo() : new EmployeesMockRepo();

const getAllEmployees = async () => {
  console.info('getAllEmployees called...');

  return await repo.getAllEmployees();
};

export { getAllEmployees };
