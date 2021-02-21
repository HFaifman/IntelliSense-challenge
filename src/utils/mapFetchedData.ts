import { TK1Measurements } from "../api/measurements"
import generateRandomColor from "./generateRandomColor"

const mapFetchedData = (obj: TK1Measurements) => {
  return Object.keys(obj)
    .map((key) => {
      return {
        id: key,
        color: generateRandomColor(),
        values: obj[key].values,
        times: obj[key].times,
        data: obj[key].values?.map((value, index) => {
          return {
            x: obj[key].times[index],
            y: value,
          }
        }),
      }
    })
    .filter((item) => item.id.startsWith("TK1_"))
}
export default mapFetchedData
