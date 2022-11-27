const connection = require('../models/connection');

const getAll = async () => {
  const [secao] = await connection.execute('SELECT * FROM secao');
  return secao;

};

const createSecao = async (secao) => {
  const { title } = secao;

  const dateUTC = new Date(Date.now()).toUTCString();

  const query = 'INSERT INTO secao (title, status, created_at) VALUES (?, ?, ?)';

  const [createdSecao] = await connection.execute(query, [title, 'nova', dateUTC]);

  return {insertId: createdSecao.insertId};
};

const deleteSecao = async (id) =>{
  const removedSecao = await connection.execute('DELETE FROM secao WHERE id = ?', {id});
  return removedSecao;
};

const updateSecao = async (id, secao ) =>{
  const { title, status} = secao;

  const updatedSecao = await connection.execute('UPDATE secao SET title = ?, status = ? WHERE id = ?', [title, status,id]);
  
  return updatedSecao;
};

module.exports = {
  getAll,
  createSecao,
  deleteSecao,
  updateSecao,

};