import { Component } from 'react'

export default class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }
  componentDidMount() {
    this.timerID = setInterval(()=>{
        this.tick()
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }

  render() {
    return (
      <div className='App'>
        <h2>*Class Component*</h2>
        <h3>Hello {this.props.name}</h3>
        <h4>It's {this.state.date.toLocaleString()}</h4>
      </div>
    )
  }
}
