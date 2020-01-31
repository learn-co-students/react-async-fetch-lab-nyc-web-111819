// create your App component here
import React from 'react';

class App extends React.Component {
  
  state = {
    astros: []
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        astros: [...data.people]
      })
    })  
  }

  
  render() {
    return(
      <div>
        {this.state.astros.map(astro => <div>
           {astro.name} is aboard {astro.craft}
         </div>
        )}
      </div>
    )
  }
}

export default App