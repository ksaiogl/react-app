import React from "react";
// import PropTypes from "prop-types";


// const App = () => <h1>Hello world</h1>
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is from state',
      p2: 0
    }
  }

  update(e) {
    // this.setState({ txt: e.target.value })
    this.setState({ txt: e.type })
  }

  render() {
    return (
      <div>
        <Widget update={this.update.bind(this)} />
        <h1>{this.state.txt}-{this.state.p2}-{this.props.p1}</h1>
        <Button>I <Heart /> React</Button>
      </div>
    )
  }
}

App.propTypes = {
  p1(props, propName, component) {
    if (!(propName in props)) {
      return new Error('p1 is required')
    }
    if (props[propName].length < 6) {
      return new Error('p1 must be 6')
    }
  }
}


const Widget = (props) => <input type='text'
  onCopy={props.update}
  onCut={props.update}
  onBlur={props.update}
  onFocus={props.update}
  onKeyPress={props.update} />
const Button = (props) => <button>{props.children}</button>

class Wrapper extends React.Component {
  mount() {
    return
  }
  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>UnMount</button>
      </div>
    )
  }
}

class Heart extends React.Component {
  render() {
    return <span>&hearts;</span>
  }
}


export default App