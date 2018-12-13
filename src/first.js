import React from 'react';
import {View, Button, Text} from 'react-native';


export default class First extends React.Component {

    constructor(props) {
        super(props);

        this.state = {'title': 'FiRST'};
    }

    render() {
        return (
            <View>
                <Text>Hello World</Text>
            </View>
        );
    }

}