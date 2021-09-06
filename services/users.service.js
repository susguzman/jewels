//import { query } from "../config/db.config";

export function register(data, callback) {
  //query(
  //  `INSERT INTO users (firstName, lastName, emailId, password) VALUES (?, ?, ?, ?)`,
  //  [data.firstName, data.lastName, data.emailId, data.password],
  //  (error, results, fields) => {
  //    if (error) {
  //      return callback(error);
  //    }
  //    return callback(null, `Registration successful`);
  //  }
  //);
  console.log('/users/register');
  return callback(null, `Registration successful`);
}

export function login(data, callback) {
  console.log('/users/login');
  return callback(null, `Login successful`);
}