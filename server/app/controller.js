////////////////////////////////////////////////////////////////////////////////
/////////////////////         Controller (MVC)           ///////////////////////
////////////////////////////////////////////////////////////////////////////////

const { saveCall, getCall } = require("./model");

/* Calls the saveCall function of the model to update database*/
exports.saveCall = async (req, res) => {
  try {
    const { id, signalData } = req.body;
    await saveCall(id, signalData);
    res.status(200).send(true);
  } catch (ex) {
    res.status(400).send(ex.message);
  }
};

/* Calls the getCall function of the model to update database*/
exports.getCall = async (req, res) => {
  try {
    const { id } = req.params;
    const code = await getCall(id);
    res.status(200).send({ code });
  } catch (ex) {
    res.status(400).send(ex.message);
  }
};
