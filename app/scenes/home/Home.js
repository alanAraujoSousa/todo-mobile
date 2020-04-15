import React, { useState, useContext, useReducer, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import reducer, { initialTodoState, DELETE_TODO, CREATE_TODO, LIST_TODOS } from "../../reducers/todos.reducer";
import * as api from "../../services/todo.service";

import List from '../../components/List';
import Input from '../../components/Input';
import Profile from '../../components/Profile';

import { useAuth } from "../../providers/auth.provider";

export default function Home(props) {
    
    const {navigate} = props.navigation;

    const {auth, handleLogout} = useAuth();
    const [todos, dispatch] = useReducer(reducer, initialTodoState);

    useEffect(() => {
        initialize();
    }, []);

    // TODO mover tudo para action creators
    async function initialize() {
        const todosReceived = await api.list();
        dispatch({type: LIST_TODOS, todos: todosReceived});
    }

    async function onAddTodo(text) {
        const todoCreated = await api.register({content: text});
        dispatch({type: CREATE_TODO, todo: todoCreated});
    }
    
    async function onRemoveTodo(id) {
        await api.remove(id);
        dispatch({type: DELETE_TODO, id: id});
    }

    return (
        <View>
            <Profile>
            </Profile>
            <Input
                placeholder={'Type a todo, hit enter to save, click to delete!'}
                onSubmitEditing={onAddTodo}
            />
            <List
                list={todos}
                onPressItem={onRemoveTodo}
            />
        </View>
    )
}