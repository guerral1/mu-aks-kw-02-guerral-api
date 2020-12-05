import DetailsRepo from '../repositories/DetailsRepo';
import DetailsMockRepo from '../mockRepositories/DetailsMockRepo';

const repo = process.env.USE_DB === 'true' ? new DetailsRepo() : new DetailsMockRepo();

const getDetailsById = async (id) => {
  console.info(`getDetailsById(${id}) called...`);

  const result = await repo.getDetailsById(id);
  if (!result || result.length === 0) {
    throw new Error('Not Found');
  }

  return result[0];
};

export { getDetailsById };
