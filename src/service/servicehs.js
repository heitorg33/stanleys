const { postHTTP, propertiesPhone, queryNumber } = require("./http");

const validarNumber = async (number_wts) => {
  console.log(number_wts);
  const responseNumber = await postHTTP(
    `crm/v3/objects/contacts/search`,
    queryNumber(number_wts)
  );
  console.log(responseNumber);
  return responseNumber;
};

module.exports = { validarNumber };
