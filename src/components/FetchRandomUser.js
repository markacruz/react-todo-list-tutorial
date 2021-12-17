import React from "react";

export default class FetchRandomUser extends React.Component {
    
    state = {
        loading: true,
        people: []
    }

    async componentDidMount() {
        const url = "https://api.randomuser.me/?results=7";
        const response = await fetch(url);
        const data = await response.json();

        this.setState({
            people: data.results,
            loading: false
        })
    }
    
    render() {

        if (this.state.loading) {
            return(
                <div>
                    loading...
                </div>
            )
        }

        if (!this.state.people.length) {
            return (
                <div>
                    no person found...
                </div>
            )
        }

        const uniquePerson = this.state.people.map((person, i) => (
            <div key={`some-person-${i}`}>
                <div>
                    {person.name.title} {person.name.first} {person.name.last}
                </div>
                <img alt="Hello" src={person.picture.large}></img>
            </div>
        ))

        return (
            <div>
                {uniquePerson}
            </div>
        )
    }
}