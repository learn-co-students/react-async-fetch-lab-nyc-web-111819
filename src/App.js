import React from 'react';

class App extends React.Component {

    state = {
        astronauts: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json').then(resp => resp.json())
        .then(astronauts => this.setState({
            astronauts: astronauts
        }))
    }

    render() {
        console.log(this.state.astronauts)
        return (
            <div>
                <h2>Hello</h2>
            </div>
        )
    }

}

export default App;