import AppStorage from './AppStorage'
import axios from 'axios';
// import { resolve } from 'core-js/fn/promise';

class User{

    login(data){
        return axios.post('https://bank-sampah-api.herokuapp.com/api/login', data, {
            headers:{
                'Accept': 'application/json',
                'Content-type' : 'application/json',
            }
        })
    }

    registerCustomer(data){
        return axios.post('/api/register', data, {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
    }

    storeSession(data){
        const user = JSON.stringify(data.user);
        const token = data.token;
        AppStorage.store(user, token);
    }
    
    loggedIn(){
        const userId = AppStorage.getUser();
        if(!userId){
            return true;
        }else{
            return false;
        }
    }

    getToken(){
        const storedToken = AppStorage.getToken();
        return storedToken;
    }

    logout(){
        return new Promise(resolve => {
            setTimeout(() => {
                AppStorage.clear();
                resolve();
            },300);
        })
    }

    info(){
        if(this.loggedIn){
            return AppStorage.getUser();
        }
        return console.log('login first');
    }

}

export default new User();