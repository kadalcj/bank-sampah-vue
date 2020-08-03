class AppStorage
{

    storeToken(token){
        localStorage.setItem('token', token);
    }

    storeUser(userid){
        localStorage.setItem('userid', userid);
    }

    store(user, token){
        this.storeUser(user);
        this.storeToken(token);
    }

    clear(){
        localStorage.removeItem('userid');
        localStorage.removeItem('token');
    }

    getUser(){
        let user = localStorage.getItem('userid');
        try{
            return JSON.parse(user);
        }catch(error){
            return{}
        }
    }
    
}

export default AppStorage;