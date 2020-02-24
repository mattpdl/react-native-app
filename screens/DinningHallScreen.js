import * as React from 'react';
import { Menu } from "../components/Menu";
import { getDatabase } from "../model/data";

export default class DiningHallScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: {} };
    }

    updateData = (data) => {
        const json = data.toJSON();
        const a = Object.keys(json).map(key => json[key]);
        this.setState({ data: a.filter(item => item.location === this.props.route.name) });
    }

    componentDidMount = () => {
        getDatabase().ref("/menus").once("value", this.updateData);
    }

    render = () => {
        return (
            <Menu data={this.state.data}></Menu>
        );
    }
}