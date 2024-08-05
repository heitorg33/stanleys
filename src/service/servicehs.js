const { baseKinkBox } = require("../utils/baseApi");
const { postHTTP, queryNumber } = require("./http");

const getResponseKinkBox = (number_wts) => {
  const channelId = 3642;
  return baseKinkBox
    .get(`?phone=${number_wts}&channelId=${channelId}`)
    .then((response) => response.data)
    .catch((error) => error.message);
};

const getResponseNumber = (number_wts) => {
  return postHTTP(`crm/v3/objects/contacts/search`, queryNumber(number_wts));
};

const processRequests = async (number_wts) => {
  try {
    const [responseKinkBox, responseNumber] = await Promise.all([
      getResponseKinkBox(number_wts),
      getResponseNumber(number_wts),
    ]);

    console.log(responseKinkBox);
    console.log(responseNumber);

    const { results } = responseNumber;
    const existeInHubSpot = results.length > 0;

    const existeKinkBox = responseKinkBox.canReceiveMessage;

    return { existeInHubSpot, existeKinkBox };
  } catch (error) {
    console.error("Error processing requests:", error);
    return { existeInHubSpot: false, existeKinkBox: false };
  }
};

const validarNumber = async (number_wts) => {
  number_wts = number_wts.replace(/\D/g, "");
  const { existeInHubSpot, existeKinkBox } = await processRequests(number_wts);

  if (existeInHubSpot && existeKinkBox) {
    console.log("WhatsApp Existente e Cadastrado");
    return { hubspot: true, existeKinkBox };
  } else if (!existeInHubSpot && existeKinkBox) {
    console.log("WhatsApp Existente e não Cadastrado");
    return { hubspot: false, existeKinkBox };
  } else if (!existeKinkBox) {
    console.log("WhatsApp Inexistente");
    return "WhatsApp inexistente!";
  }
};

module.exports = { validarNumber };
