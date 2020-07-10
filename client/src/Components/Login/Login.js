import { HotKeys } from 'react-hotkeys';

import React, { PureComponent, Component } from 'react';
import { configure } from 'react-hotkeys';


const COLORS = ['green', 'purple', 'orange', 'grey', 'pink'];

const ACTION_KEY_MAP = {
  KEY: 'Control+s',
};

class Login extends Component {
  constructor(props, context) {
    super(props, context);

    this.changeColor = this.changeColor.bind(this);
    configure({
      ignoreTags: ['div']
    });
  
    this.state = {
      colorNumber: 0
    };
  }

  changeColor(e) {
    e.preventDefault();
    this.setState(({ colorNumber }) => ({ colorNumber: colorNumber === COLORS.length - 1 ? 0 : colorNumber + 1 }));
  }

  KeyDown(e){
    if(e.ctrlKey) e.preventDefault();
  }
  render() {
    const handlers = {
      KEY: this.changeColor
    };

    const { colorNumber } = this.state;
    const style = {
      width: 200,
      height: 60,
      left: 20,
      top: 20,
      opacity: 1,
      background: COLORS[colorNumber],
    };

    return (

      <HotKeys
        keyMap={ACTION_KEY_MAP}
        handlers={handlers}        
      >
          <textarea 
            style={style}
            className="node"
            tabIndex="0"
            onKeyDown={this.KeyDown}
          ></textarea>
       
      </HotKeys>


    );
  }
}

export default Login;
