import React from 'react';
import axios from 'axios';
import { List, Typography } from 'antd';

export default class agari extends React.Component {
    state = {
        user: [],
    };

    componentDidMount() {
        axios.get('http://localhost:3065/api/agari/').then(res => {
            console.log(res);
            this.setState({ user: res.data })
        });
    }

    render() {
        return <ul>{this.state.user.map(data => <li>{data.name} {data.phone}</li>)}</ul>
    }
}