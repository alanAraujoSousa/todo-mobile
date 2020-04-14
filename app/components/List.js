import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

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
            <View>
                {list.items.map(this.renderItem)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    padding: 15,
  },
})