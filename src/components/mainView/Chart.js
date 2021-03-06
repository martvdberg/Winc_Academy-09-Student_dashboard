import React from "react";

import {
  VictoryChart,
  VictoryLegend,
  VictoryGroup,
  VictoryBar,
  VictoryAxis,
  VictoryTheme,
  VictoryLabel,
  VictoryZoomContainer,
  VictoryLine,
} from "victory";

const colorFun = "#F6830F";
const colorDiff = "#BB2205";

function Chart({ chartData, filterSettings }) {
  return (
    <div className="main__chart">
      <div className="main__chart--legend legend"></div>
      <div className="main__chart--chart">
        <VictoryChart
          height={335}
          width={1000}
          domainPadding={{ x: 8, y: 5 }}
          theme={VictoryTheme.material}
          padding={{ left: 50, top: 30, right: 20, bottom: 80 }}
          containerComponent={<VictoryZoomContainer />}
        >
          <VictoryLegend
            x={40}
            y={5}
            orientation="horizontal"
            data={[
              { name: "Fun", symbol: { fill: colorFun } },
              { name: "Difficult", symbol: { fill: colorDiff } },
            ]}
          />

          <VictoryAxis
            style={{
              tickLabels: { angle: -65, fontSize: 8 },
              grid: { display: "none" },
            }}
            tickLabelComponent={<VictoryLabel textAnchor={"end"} />}
          />

          <VictoryAxis
            dependentAxis
            tickValues={[0, 1, 2, 3, 4, 5]}
            style={{
              tickLabels: { fontSize: 6 },
              grid: { stroke: "#000", strokeWidth: 0.6 },
            }}
          />

          <VictoryGroup offset={7} style={{ data: { width: 6 } }}>
            {filterSettings.funChart ? (
              filterSettings.barChart ? (
                <VictoryBar
                  data={chartData}
                  x="task"
                  y="fun"
                  style={{ data: { fill: colorFun } }}
                />
              ) : (
                <VictoryLine
                  data={chartData}
                  x="task"
                  y="fun"
                  style={{ data: { stroke: colorFun } }}
                />
              )
            ) : null}

            {filterSettings.diffChart ? (
              filterSettings.barChart ? (
                <VictoryBar
                  data={chartData}
                  x="task"
                  y="diff"
                  style={{ data: { fill: colorDiff } }}
                />
              ) : (
                <VictoryLine
                  data={chartData}
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
