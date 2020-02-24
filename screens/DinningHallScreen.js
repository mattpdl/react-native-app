import * as React from 'react';
import { Menu } from "../components/Menu";
import { getDatabase } from "../model/data";
import { View } from 'react-native';
import Covel from './Covel';
import DeNeve from './DeNeve';
import BPlate from './BPlate';
import Feast from './Feast';

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
        getDatabase().ref("/menus").on("value", this.updateData);
    }

    render = () => {
        if (this.props.route.name === "Covel") {
            return (<View>
                <Covel></Covel>
                <Menu data={this.state.data}></Menu>
            </View>)
        } else if (this.props.route.name === "De Neve") {
            return (<View>
                <DeNeve></DeNeve>
                <Menu data={this.state.data}></Menu>
            </View>)
        }else if (this.props.route.name === "Feast") {
            return (<View>
                <Feast></Feast>
                <Menu data={this.state.data}></Menu>
            </View>)
        } else {
            return (<View>
                <BPlate></BPlate>
                <Menu data={this.state.data}></Menu>
            </View>)
        }
    }
}