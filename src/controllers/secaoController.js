const secaoModel = require('../models/secaoModel');

const getAll = async (request, response) => {
  const secao = await secaoModel.getAll();

  return response.status(200).json(secao);
};

const createSecao = async (request, response) => {
  const createdSecao = await secaoModel.createSecao(request.body);
  return response.status(201).json({createdSecao});
};

const deleteSecao = async (request, response) => {
  const { id } = request.params;
  await secaoModel.deleteSecao(id);
  return response.status(204).json();
};

const updateSecao = async (request, response) =>{
  const { id } = request.params;

  await secaoModel.updateSecao(id, request.body);
  return response.status(204).json();
};

module.exports = {
  getAll,
  createSecao,
  deleteSecao,
  updateSecao,
};