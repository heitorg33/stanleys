const { postHTTP, propertiesPhone, queryNumber } = require("./http");

const validarNumber = async (number_wts) => {
  console.log(number_wts);
  const responseNumber = await postHTTP(
    `crm/v3/objects/contacts/search`,
    queryNumber(number_wts)
  );
  console.log(responseNumber);
  const {
    properties: {
      email,
      numero_de_telefone_de_whatsapp__provisorio_somente_para_integracao_kinbox_2,
      firstname,
    },
  } = responseNumber.results[0];
  return {
    email,
    numero_de_telefone_de_whatsapp__provisorio_somente_para_integracao_kinbox_2,
    firstname,
  };
};

module.exports = { validarNumber };
