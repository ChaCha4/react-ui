import React, { Component } from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';
class App extends Component {
  state = {
    data: [
      { name: '4k-6k', per: '3.9%' },
      { name: '8k-10k', per: '1.1%' },
      { name: '10k-12k', per: '60%' },
      { name: '12k-14k', per: '5%' },
      { name: '14k-16k', per: '10%' },
      { name: '16k-18k', per: '20%' }
    ],
    showDetail: []
  };
  //   onChange = ele => {
  //     console.log(ele);
  //     switch (ele) {
  //       case '4k-6k':
  //         this.setState({ showDetail: ['1'] });
  //         break;
  //       case '16k-18k':
  //         this.setState({ showDetail: ['6'] });
  //         break;
  //       case '8k-10k':
  //         this.setState({ showDetail: ['2'] });
  //         break;
  //       case '10k-12k':
  //         this.setState({ showDetail: ['3'] });
  //         break;
  //       case '12k-14k':
  //         this.setState({ showDetail: ['4'] });
  //         break;
  //       case '14k-16k':
  //         this.setState({ showDetail: ['5'] });
  //         break;
  //       default:
  //         this.setState({
  //           showDetail: []
  //         });
  //     }
  //     console.log(this.state.showDetail);
  //   };
  handlePie = ({ name, per }) => {
    const { showDetail } = this.state;
    const newLi = {
      name,
      per
    };
    // find findIndex 替代indexOf 作为查找数组中是否有相同的对象
    if (showDetail.findIndex(e => e.name === newLi.name) === -1) {
      this.setState({
        showDetail: [...showDetail, newLi]
      });
    }
  };
  render() {
    const { data, showDetail } = this.state;
    const newData = data.map(e => {
      e.per = parseFloat(e.per);
      return e;
    });
    const COLOR = ['#f00', '#0f0', '#00f', '#000', 'pink', 'teal'];
    return (
      <>
        <PieChart width={500} height={400} style={{ margin: '0 auto' }}>
          <Pie
            data={newData}
            dataKey="per"
            nameKey="name"
            cx="140"
            cy="50%"
            outerRadius={80}
            innerRadius={40}
            fill="#82ca9d"
            label
            onClick={this.handlePie}
          >
            {newData.map((entry, ind) => (
              <Cell key={`cell-${ind}`} fill={COLOR[ind]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend align="right" layout="vertical" />
        </PieChart>
        <ul>
          {showDetail.map(detail => (
            <li key={detail.name}>
              {detail.name}:{detail.per}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
