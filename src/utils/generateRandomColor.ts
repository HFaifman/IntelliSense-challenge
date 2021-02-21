const generateRandomColor = () => {
  const rand = (min: number, max: number) => min + Math.random() * (max - min)
  const h = rand(1, 360)
  const s = rand(0, 100)
  const l = rand(0, 100)
  return "hsl(" + h + "," + s + "%," + l + "%)"
}
export default generateRandomColor
