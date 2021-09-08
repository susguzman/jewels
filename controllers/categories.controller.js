import * as categoriesService from "../services/categories.service.js";

export function getAll(req, res, next) {  
  // Validation area
  const data = {};

  categoriesService.getAll(data, (error, results) => {
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
    categoryId: req.params.categoryId,
  };

  categoriesService.get(data, (error, results) => {
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
    name: req.body.name,
    description: req.body.description,
    categoryId: req.params.categoryId,
  };
  
  categoriesService.create(data, (error, results) => {
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
    categoryId: req.params.categoryId,
  };

  categoriesService.update(data, (error, results) => {
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
    categoryId: req.params.categoryId,
  };

  categoriesService.remove(data, (error, results) => {
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