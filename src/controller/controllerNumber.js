const { validarNumber } = require("../service/servicehs");

const controllerNumber = async (req, res) => {
  try {
    const requestNumber = await validarNumber(req.body.phone);
    return res.status(200).json(requestNumber);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = { controllerNumber };
