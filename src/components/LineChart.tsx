import { ResponsiveLine } from "@nivo/line"
import { MappedMeasurements } from "../types/MappedMeasurements"

interface LineChartProps {
  data: MappedMeasurements[]
}

const LineChart = ({ data }: LineChartProps) => {
  const colors = data.map((item) => item.color)
  return (
    <ResponsiveLineaaaa
      colors={colors}
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      axisTop={null}
      axisRight={null}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",

          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "times",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      useMesh={true}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "values",
        legendOffset: -40,
        legendPosition: "middle",
      }}
    />
  )
}

export default LineChart
