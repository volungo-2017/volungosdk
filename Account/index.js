import Axios from 'axios'

class AccountAPI{
constructor(){
    this.url = 'https://account.volungo.com/'
}
    static login(username, password){
        console.log(username, password)
        return Axios.post(`${url}/api/login`, {
            username,
            password
        })
    }
}


module.exports = new AccountAPI()