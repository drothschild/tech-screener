import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledList = styled.ul`
    list-style: none;
`;

class Gists extends Component {
    state = {
        gists: [],
        user: 'basecamp'
    };
    async componentDidMount() {
        this.loadData();
    }
    loadData = async () => {
        const url = `https://api.github.com/users/${
            this.props.match.params.user
        }/gists`;
        const res = await axios.get(url);
        this.setState({ gists: res.data });
    };
    render() {
        return (
            <div>
                <h1>Gists</h1>
                <StyledList>
                    {this.state.gists.map(gist => (
                        <li key={gist.id}>
                            <ul>
                                {Object.keys(gist.files).map(file => (
                                    <li key={file}>
                                        {gist.files[file].filename}-
                                        {gist.files[file].language}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </StyledList>
            </div>
        );
    }
}

export default Gists;
