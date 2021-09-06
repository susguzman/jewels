import * as categoriesService from "../services/categories.service.js";

export function create(req, res, next) {
  // Validation area
  const data = {
    name: req.body.name,
    description: req.body.description,
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
