// App.js
import React from "react";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import LineChart from "./components/LineChart";
import DoughnutChart from "./components/Doughnot";
import RadarChart from "./components/RadarChart";
import { Col, Row } from "react-bootstrap";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <h1>Charts in React</h1>

      <Row>
        <Col lg={4} md={6} sm={6} xs={12}>
          <div className="chart_height">
            <BarChart />
          </div>
        </Col>

        <Col lg={4} md={6} sm={6} xs={12}>
          <div className="chart_height">
            <PieChart />
          </div>
        </Col>

        <Col lg={4} md={6} sm={6} xs={12}>
          <div className="chart_height">
            <LineChart />
          </div>
        </Col>
        <Col lg={4} md={6} sm={6} xs={12}>
          <div className="chart_height">
            <RadarChart />
          </div>
        </Col>

        <Col lg={4} md={6} sm={6} xs={12}>
          <div className="chart_height">
            <DoughnutChart />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
