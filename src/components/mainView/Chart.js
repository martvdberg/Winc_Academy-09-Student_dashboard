import React from "react";

import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryAxis,
  VictoryTheme,
  VictoryLabel,
  VictoryZoomContainer,
} from "victory";

const colorFun = "#84DFFF";
const colorDiff = "#516BEB";

function Chart({ average }) {
  return (
    <div className="chartWrapper">
      <VictoryChart
        height={350}
        width={1100}
        domainPadding={{ x: 8, y: 5 }}
        theme={VictoryTheme.material}
        padding={{ left: 50, top: 0, right: 20, bottom: 80 }}
        containerComponent={
          <VictoryZoomContainer
          // zoomDimension={["x", "y"]}
          />
        }
      >
        <VictoryAxis
          style={{
            tickLabels: { angle: -65, fontSize: 8 },
          }}
          tickLabelComponent={<VictoryLabel textAnchor={"end"} />}
        />

        <VictoryAxis
          dependentAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickCount={5}
          style={{
            tickLabels: { fontSize: 6 },
          }}
        />

        <VictoryGroup
          offset={7}
          style={{ data: { width: 6 } }}
          //   colorScale={"warm"}
        >
          <VictoryBar
            data={average}
            x="task"
            y="fun"
            style={{ data: { fill: colorFun } }}
          />
          <VictoryBar
            data={average}
            x="task"
            y="diff"
            style={{ data: { fill: colorDiff } }}
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
}

export default Chart;
