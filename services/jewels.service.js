
export function getAll(data, callback) {
  console.log('--GET /jewels');
  return callback(null, `GET All jewels`);
}

export function get(data, callback) {
  console.log('--GET /jewels/' + data.jewelId);
  return callback(null, `GET Jewel`);
}

export function create(data, callback) {
  console.log('--POST /jewels');
  return callback(null, `CREATE Jewel successful`);
}

export function update(data, callback) {
  console.log('--PUT /jewels/' + data.jewelId);
  return callback(null, `UPDATE Jewel successful`);
}

export function remove(data, callback) {
  console.log('--DELETE /jewels/' + data.jewelId);
  return callback(null, `DELETE Jewel successful`);
}
