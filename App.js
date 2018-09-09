import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

function logConsole(message) {
    console.log("NowRunning: " + message);
}

export default class MainComponent extends Component {
    constructor() {
        super();
        logConsole("constructor");
    }

    componentWillMount() {
        logConsole("componentWillMount");
    }

    render() {
        logConsole("render");
        return (
          <View>
            <Text>Frog is learning to code React Native :)</Text>
          </View>
        );
    }

    componentDidMount() {
        logConsole("componentDidMount");
    }

}
