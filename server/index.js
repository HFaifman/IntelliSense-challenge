const cors = require("cors")
const predictionsController = require("./controllers/PredictionsController")
const app = require("express")()
const PORT = 3001

app.get("/", cors(), async (_, res) => {
  try {
    const predictions = await predictionsController()
    res.send(predictions)
  } catch (err) {
    res.status(500).send("Something went wrong")
  }
})

app.listen(PORT)
