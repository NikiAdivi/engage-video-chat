const { saveCall, getCall } = require("./model");

exports.saveCall = async (req, res) => {
  try {
    const { id, signalData } = req.body;
    await saveCall(id, signalData);
    res.status(200).send(true);
  } catch (ex) {
    res.status(400).send(ex.message);
  }
};

exports.getCall = async (req, res) => {
  try {
    const { id } = req.params;
    const code = await getCall(id);
    res.status(200).send({ code });
  } catch (ex) {
    res.status(400).send(ex.message);
  }
};
