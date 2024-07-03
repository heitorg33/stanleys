const { baseApi, baseKinkBox } = require("../utils/baseApi");
const { postHTTP, propertiesPhone, queryNumber } = require("./http");

const validarNumber = async (number_wts) => {
  console.log("55" + number_wts);
  number_wts = "55" + number_wts
  const channelId = 3642;
  const responseKinkBox = await baseKinkBox
    .get(
      `?phone=${number_wts}&channelId=${channelId}
`
    )
    .then((response) => response.data)
    .catch((error) => error.message);

  console.log(responseKinkBox);

  const responseNumber = await postHTTP(
    `crm/v3/objects/contacts/search`,
    queryNumber(number_wts)
  );
  console.log(responseNumber);
  let numberIstrue;
  if (responseNumber.canReceiveMessage) {
    numberIstrue = responseNumber.canReceiveMessage;
  }
  const {
    properties: {
      email,
      numero_de_telefone_de_whatsapp__provisorio_somente_para_integracao_kinbox_2,
      firstname,
    },
  } = responseNumber.results[0];

  if (responseNumber.results.length > 0) {
    return {
      email,
      numero_de_telefone_de_whatsapp__provisorio_somente_para_integracao_kinbox_2,
      firstname,
      numberIstrue,
    };
  }
};

module.exports = { validarNumber };
