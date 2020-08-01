class AppStorage
{
    storeUser(userid){
        localStorage.setItem('userid', userid);
    }

    store(user){
        this.storeUser(user);
    }

    clear(){
        localStorage.removeItem('userid');
    }

    getUser(){
        return localStorage.getItem('userid');
    }
    
}

export default AppStorage = new AppStorage();