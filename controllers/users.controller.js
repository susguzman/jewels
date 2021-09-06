import * as usersService from "../services/users.service.js";

export function register(req, res, next) {
  // Validation area
  const data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailId: req.body.emailId,
    password: req.body.password,
  };
  
  usersService.register(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
}

export function login(req, res, next) {
  // Validation area
  const data = {
    emailId: req.body.emailId,
    password: req.body.password,
  };
  
  usersService.login(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
}