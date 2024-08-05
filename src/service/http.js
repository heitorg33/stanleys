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
      "whatsapp_id",
      "firstname",
      "email"
    ],
    filterGroups: [
      {
        filters: [
          {
            propertyName:
              "whatsapp_id",
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
