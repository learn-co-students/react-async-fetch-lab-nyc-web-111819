import React from 'react';

class App extends React.Component {

    state = {
        peopleInSpace: []
    }
    
    renderAstroPeople = () => {
        if (this.state.peopleInSpace) {
            let spacePeopleNames = this.state.peopleInSpace.map((person) => <p>{person.name}</p>)
            return spacePeopleNames
        }
    }
    
    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json())
        .then(astroData => this.setState({peopleInSpace: astroData.people}))
    }

    render() {
        return (
            <div>{this.renderAstroPeople()}</div>
            )
    }
}

export default App