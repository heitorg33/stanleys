const { baseApi } = require("../utils/baseApi");

const postHTTP = async (url, data) => {
  try {
    const respostaEnvioEmail = await baseApi
      .post(url, data)
      .then((response) => response.data)
      .catch((error) => error);
    return respostaEnvioEmail;
  } catch (error) {
    return { status: error.response.data, message: error.message };
  }
};

const queryNumber = (data) => {
    console.log("Query",  data)
  const query = {
    properties: [
      "hs_object_id",
      "numero_de_telefone_de_whatsapp__provisorio_somente_para_integracao_kinbox_2",
      "firstname",
    ],
    filterGroups: [
      {
        filters: [
          {
            propertyName:
              "numero_de_telefone_de_whatsapp__provisorio_somente_para_integracao_kinbox_2",
            value: data,
            operator: "EQ",
          },
        ],
      },
    ],
  };
  return query;
};

module.exports = { postHTTP, queryNumber };
