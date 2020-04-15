import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

export default class List extends Component {

    renderItem = (todo, i) => {

        const { onPressItem } = this.props;
        
        return (
            <TouchableOpacity key={todo.id} style={styles.item} onPress={() => onPressItem(todo.id)}>
                <Text>{todo.content}</Text>
            </TouchableOpacity>
        )
    }

    render() {

        const { list } = this.props;
        
        return (
            <ScrollView>
                {list.items.map(this.renderItem)}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'whitesmoke',
    padding: 15,
    marginBottom: 5,
    borderRadius: 4,
    borderColor: '#aab',
    borderWidth: 1,
    marginHorizontal: 20
  },
})