import * as jewelsService from "../services/jewels.service.js";

export function getAll(req, res, next) {  
  // Validation area
  const data = {};

  jewelsService.getAll(data, (error, results) => {
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

export function get(req, res, next) {  
  // Validation area
  const data = {
    jewelId: req.params.jewelId,
  };

  jewelsService.get(data, (error, results) => {
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

export function create(req, res, next) {
  // Validation area
  const data = {
    link: req.body.link,
    date: req.body.date,
    categoryId: req.body.categoryId,
  };
  
  jewelsService.create(data, (error, results) => {
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

export function update(req, res, next) {
  // Validation area
  const data = {
    jewelId: req.params.jewelId,
    link: req.body.link,
    date: req.body.date,
    categoryId: req.body.categoryId,
  };

  jewelsService.update(data, (error, results) => {
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

export function remove(req, res, next) {
  // Validation area
  const data = {
    jewelId: req.params.jewelId,
  };

  jewelsService.remove(data, (error, results) => {
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