import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledList = styled.ul`
    list-style: none;
`;
export default class Github extends Component {
    state = {
        repos: [],
        user: 'basecamp'
    };
    async componentDidMount() {
        this.loadData();
    }
    loadData = async () => {
        const url = `https://api.github.com/users/${this.state.user}/repos`;
        const res = await axios.get(url);
        this.setState({ repos: res.data });
    };
    render() {
        return (
            <div>
                <h1>Repos</h1>
                <label htmlFor="user" />
                <input
                    name="user"
                    id="user"
                    value={this.state.user}
                    onChange={e => {
                        this.setState({ user: e.target.value });
                    }}
                />
                <button
                    onClick={() => {
                        this.loadData();
                    }}
                >
                    Load Repo
                </button>
                <StyledList>
                    {this.state.repos.map(repo => (
                        <li key={repo.id}>
                            {repo.name} - {repo.language}
                        </li>
                    ))}
                </StyledList>
            </div>
        );
    }
}
