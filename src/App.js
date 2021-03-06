import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import doubleCircles from './drawings/doubleCircles';
import contours from './drawings/contours';
import flower from './drawings/flower';
import petals from './drawings/petals';
import theEye from './drawings/theEye';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sketches: [ petals, contours, flower, doubleCircles, theEye ],
      active: petals,
    }
  }

  switchSketch = () => {
    const current = this.state.active;
    const nextSketchs = this.state.sketches.filter((sketch) => {
      return sketch.name !== current.name;
    });
    const newSketchs = nextSketchs.concat(current);
    this.setState({
      active: nextSketchs[0],
      sketches: newSketchs,
    });
  }

  render() {
    return (
      <div className="App" onClick={this.switchSketch}>
        <P5Wrapper sketch={this.state.active} />
      </div>
    );
  }
}

export default App;
