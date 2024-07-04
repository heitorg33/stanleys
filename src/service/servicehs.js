const { baseApi, baseKinkBox } = require("../utils/baseApi");
const { postHTTP, propertiesPhone, queryNumber } = require("./http");

const validarNumber = async (number_wts) => {
 
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
  const { results } = responseNumber;
  const existeInHubSpot = results.length > 0 ? true : false;

  const existeKinkBox = responseKinkBox.canReceiveMessage;

  if (existeInHubSpot && existeKinkBox) {
    return "WhatsApp existente e cadastrado!";
  } else if (!existeInHubSpot && existeKinkBox) {
    return "WhatsApp existente e não cadastrado!";
  } else if (!existeKinkBox) {
    return "WhatsApp inexistente!";
  }

  //   if (responseNumber.canReceiveMessage) {
  //     numberIstrue = responseNumber.canReceiveMessage;
  //   }
  //   const {
  //     properties: {
  //       email,
  //       numero_de_telefone_de_whatsapp__provisorio_somente_para_integracao_kinbox_2,
  //       firstname,
  //     },
  //   } = responseNumber.results[0];

  //   if (responseNumber.results.length > 0) {
  //     return {
  //       email,
  //       numero_de_telefone_de_whatsapp__provisorio_somente_para_integracao_kinbox_2,
  //       firstname,
  //       numberIstrue,
  //     };
  //   }
};

module.exports = { validarNumber };
