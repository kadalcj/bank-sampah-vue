import AppStorage from './AppStorage'

class User{
    
    loggedIn(){
        const userId = AppStorage.getUser();
        if(!userId){
            return true;
        }else{
            return false;
        }
    }

    info(){
        if(this.loggedIn){
            return AppStorage.getUser();
        }
        return console.log('login first');
    }
}

export default User = new User();