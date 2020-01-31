import React from 'react';

class App extends React.Component {

    state = {
        peopleInSpace: []
    }
    
    renderAstroPeople = () => {
        if (this.state.peopleInSpace) {
            let spacePeopleNames = this.state.peopleInSpace.map((person) => <div>{person.name}</div>)
            return spacePeopleNames
        }
    }
    
    render() {
        console.log(this.state.peopleInSpace)
        return (
            <div>{this.renderAstroPeople()}</div>
            )
        }
        
    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json())
        .then(astroData => this.setState({peopleInSpace: astroData.people}))
    }
}

export default App