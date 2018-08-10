import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';



export default class extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodo: ''
        }
    }

    handleChange() {
        return ((text) => this.setState({ newTodo: text }));
    }
    handlePress() {
        return (() => {
            const todos = [...this.state.todos, this.state.newTodo]
            this.setState({ todos, newTodo: '' });
        });
    }
    removeElement(i) {
        return (() => {
            this.state.todos.splice(i, 1);
            let todos = [...this.state.todos];
            this.setState({ todos });
        });
    }

    render() {
        return (
            <View >
                <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    value={this.state.newTodo}
                    onChangeText={(this.handleChange)()} />
                <Text>{this.state.newTodo}</Text>
                <TouchableOpacity onPress={(this.handlePress)()} >
                    <Text>create</Text>
                </TouchableOpacity>
                <View>
                    {this.state.todos.map((todo, i) => (<Text onPress={this.removeElement(i)} key={i}>{todo}</Text>))}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
