const predictionsService = require("../services/PredictionsService")

const predictionsController = async () => {
  const predictions = await predictionsService()
  return predictions
}

module.exports = predictionsController
