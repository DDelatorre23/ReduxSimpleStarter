import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }

    render() {
        return (
            <div className='search-bar'>
                <input 
                    value={this.state.term}
                    onChange={(event) => this.onImputChange(event.target.value)} />
            </div>
        );
    }

    onImputChange(term) {
        this.setState({term});
        this.props.onSearchTermChanged(term);
    }
}

export default SearchBar;
