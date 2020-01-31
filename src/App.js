// create your App component here
import React from 'react'

class App extends React.Component {

  state = {
    spacePeople: []
  }

  renderAstronauts = () => {
    if (this.state.spacePeople) {
      let pList = this.state.spacePeople.map((person) =>  <p>{person.name}</p>)
      return pList
    }
  }

  render(){
    return (
      <div>
        {/* <h2>Kevin</h2> */}
        {this.renderAstronauts()}
        {/* {this.state.spacePeople ? this.state.spacePeople.map((person) => <p>{person.name}</p>) : null } */}
      </div>
    )}

  // componentDidMount(){
  //   fetch('http://api.open-notify.org/astros.json')
  //     .then(resp => resp.json())
  //     .then(data => console.log(data.people))
  // }
  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(data => this.setState({ spacePeople: data.people}))
  }


}
export default App
