import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './app.css';
class App extends Component {
  state = {
    show: false
  };
  render() {
    const { show } = this.state;
    return (
      <div>
        <button style={{ display: 'block' }} onClick={this.showChange}>
          按钮
        </button>
        <CSSTransition
          classNames="message"
          in={show}
          unmountOnExit
          timeout={3000}
        >
          {/* 当in为true时，会给span加上两个类名message-enter-active  message-enter ，timeout设置的时间结束后，span的类名会被替换为 message-enter-done */}
          {/* timeout等于3000是指动画只能持续3s */}
          <span className="msg">i have a dream</span>
        </CSSTransition>
      </div>
    );
  }
  showChange = () => {
    this.setState({
      show: true
    });
  };
}

export default App;
