
export function getAll(data, callback) {
  console.log('--GET /categories');
  return callback(null, `GET All Categories`);
}

export function get(data, callback) {
  console.log('--GET /categories/' + data.categoryId);
  return callback(null, `GET Category`);
}

export function create(data, callback) {
  console.log('--POST /categories');
  return callback(null, `CREATE Category successful`);
}

export function update(data, callback) {
  console.log('--PUT /categories/' + data.categoryId);
  return callback(null, `UPDATE Category successful`);
}

export function remove(data, callback) {
  console.log('--DELETE /categories/' + data.categoryId);
  return callback(null, `DELETE Category successful`);
}
