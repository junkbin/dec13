import React from 'react';
import {View, Text} from 'react-native';

export default class Second extends React.Component {
    constructor(props){
        super(props);

        this.state = {"title" : "SECOND"};
    }

    render() {

        return (
            <View>
                <Text>{this.state.title}</Text>
            </View>
        );
    }
}