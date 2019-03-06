import React, { Component } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';
class App extends Component {
  state = {
    data: [
      { name: 'a', uv: 20, pv: 40 },
      { name: 'b', uv: 10, pv: 20 },
      { name: 'c', uv: 80, pv: 60 },
      { name: 'd', uv: 60, pv: 80 },
      { name: 'e', uv: 30, pv: 10 }
    ]
  };
  render() {
    const { data } = this.state;
    return (
      <LineChart
        width={400}
        height={400}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="pv" stroke="red" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#000" activeDot={{ r: 6 }} />
        <CartesianGrid stroke="pink" strokeDasharray="20 20" />
        <XAxis dataKey="name" stroke="pink" />
        <YAxis stroke="pink" />
        <Tooltip />
        <Legend />
      </LineChart>
    );
  }
}

export default App;
