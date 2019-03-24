import React, { Component } from "react"; // const Component = React.Component;

// functional component
// doesn't have a state
const FuncSearchBar = () => {
    return <input />; // React.createElement
};

// class component
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
            {/* <input onChange={this.onInputChange} /> */}
            </div>
        );
    }

    // onInputChange(event) {
    //     console.log(event.target.value);
    // }
}

export default SearchBar;