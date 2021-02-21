const fetch = require("node-fetch")

const predictionsService = async () => {
  const predictions = await fetch(
    "https://reference.intellisense.io/thickenernn/v1/referencia"
  )
  return predictions.json()
}

module.exports = predictionsService
