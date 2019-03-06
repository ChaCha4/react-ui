import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './app.css';
import Button from './Button/Button';
class App extends Component {
  state = {
    items: [
      { id: 1, text: 'Buy eggs' },
      { id: 2, text: 'Pay bills' },
      { id: 3, text: 'Invite friends over' },
      { id: 4, text: 'Fix the TV' }
    ],
    val: ''
  };
  handleValue = event => {
    this.setState({
      val: event.target.value
    });
  };
  addItem = () => {
    const { items, val } = this.state;
    if (val.trim()) {
      const newItem = { id: new Date().getTime(), text: val };

      console.log(newItem.id);
      this.setState({
        items: [...items, newItem],
        val: ''
      });
    }
  };
  delItem = id => {
    const { items } = this.state;
    console.log(items.id);
    this.setState({
      items: items.filter(i => i.id !== id)
    });
  };
  render() {
    const { items, val } = this.state;
    return (
      <div>
        <input type="text" value={val} onChange={this.handleValue} />
        <button onClick={this.addItem}>添加</button>
        <ul>
          <TransitionGroup component={null}>
            {items.map(({ id, text }) => (
              // 不用in控制是因为删除一条就相当于消失了
              <CSSTransition key={id} timeout={1000} classNames="items">
                <li>
                  {text}
                  <button
                    onClick={() => {
                      this.delItem(id);
                    }}
                  >
                    ×
                  </button>
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>
        <Button />
      </div>
    );
  }
}

export default App;
