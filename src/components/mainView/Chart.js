import React from "react";

import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryAxis,
  VictoryTheme,
  VictoryLabel,
  VictoryZoomContainer,
  VictoryLine,
} from "victory";

const colorFun = "#84DFFF";
const colorDiff = "#516BEB";

function Chart({ average, chartFilters }) {
  return (
    <div className="main__chart">
      <div className="main__chart--legend legend"></div>
      <div className="main__chart--chart">
        <VictoryChart
          height={350}
          width={1100}
          domainPadding={{ x: 8, y: 5 }}
          theme={VictoryTheme.material}
          padding={{ left: 50, top: 0, right: 20, bottom: 80 }}
          containerComponent={<VictoryZoomContainer />}
        >
          <VictoryAxis
            style={{
              tickLabels: { angle: -65, fontSize: 8 },
            }}
            tickLabelComponent={<VictoryLabel textAnchor={"end"} />}
          />

          <VictoryAxis
            dependentAxis
            tickValues={[0, 1, 2, 3, 4, 5]}
            style={{
              tickLabels: { fontSize: 6 },
            }}
          />

          <VictoryGroup offset={7} style={{ data: { width: 6 } }}>
            {chartFilters.funChart ? (
              chartFilters.barChart ? (
                <VictoryBar
                  data={average}
                  x="task"
                  y="fun"
                  style={{ data: { fill: colorFun } }}
                />
              ) : (
                <VictoryLine
                  data={average}
                  x="task"
                  y="fun"
                  style={{ data: { stroke: colorFun } }}
                />
              )
            ) : null}

            {chartFilters.diffChart ? (
              chartFilters.barChart ? (
                <VictoryBar
                  data={average}
                  x="task"
                  y="diff"
                  style={{ data: { fill: colorDiff } }}
                />
              ) : (
                <VictoryLine
                  data={average}
                  x="task"
                  y="diff"
                  style={{ data: { stroke: colorDiff } }}
                />
              )
            ) : null}
          </VictoryGroup>
        </VictoryChart>
      </div>
    </div>
  );
}

export default Chart;
