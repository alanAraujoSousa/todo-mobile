import axios from 'axios';

import * as c from '../constants/api.constants';

export async function register(data){
    try{
        let res = await axios.post(c.LIST_TODOS, data);

        return res.data;
    }catch (e) {
        throw handler(e)
    }
}

export async function list(){
    try{
        let res = await axios.get(c.LIST_TODOS);

        return res.data;
    }catch (e) {
        throw handler(e);
    }
}

export async function remove(id){
    try{
        let res = await axios.delete(c.LIST_TODOS + "/" + id);

        return res.data;
    }catch (e) {
        throw handler(e);
    }
}

export function handler(err) {
    let error = err;

    if (err.response && err.response.data.hasOwnProperty("message"))
        error = err.response.data;
    else if (!err.hasOwnProperty("message")) error = err.toJSON();

    return new Error(error.message);
}