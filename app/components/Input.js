import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default class Input extends Component {
 
   state = {
       text: '',
    }

    onChangeText = text => this.setState({ text });

    onSubmitEditing = () => {

        const { onSubmitEditing } = this.props;
        const { text } = this.state;
        
        if (!text) return; // Don't submit if empty
        
        onSubmitEditing(text);

        this.setState({ text: '' });
    }
    
    render() {
        
        const { placeholder } = this.props;
        const { text } = this.state;

        return (
            <TextInput
                style={styles.input}
                value={text}
                placeholder={placeholder}
                onChangeText={this.onChangeText}
                onSubmitEditing={this.onSubmitEditing}
                returnKeyType="send"
            />
        )
    }
}
const styles = StyleSheet.create({
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
    padding: 15,
    height: 50,
    marginBottom: 10
  },
})