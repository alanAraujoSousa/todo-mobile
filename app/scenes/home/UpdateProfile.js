import React, { useState } from 'react';
import {View} from 'react-native';

import * as api from "../../services/auth";
import { useAuth } from "../../providers/auth";

import Form from 'react-native-basic-form';
import {ErrorText} from "../../components/Shared";

export default function UpdateProfile (props) {
    const {navigation} = props;

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function onSubmit(data) {
        setLoading(true);

        try {

            // TODO update photo

            setLoading(false);

            navigation.goBack();
        } catch (error) {
            setError(error.message);
            setLoading(false)
        }
    }

    let formProps = {title: "Submit", fields, onSubmit, loading };
    return (
        <View style={{flex: 1, paddingHorizontal: 16, backgroundColor:"#fff"}}>
            <View style={{flex:1}}>
                <ErrorText error={error}/>
                <Form {...formProps}/>
            </View>
        </View>
    );
};

UpdateProfile.navigationOptions = ({}) => {
    return {
        title: `Update Profile`
    }
};