const Axios = require('axios')
class AccountAPI{
   
constructor(){
    this.url = process.env.NEXT_PUBLIC_ACCOUNT_HOST
}
    async   login(email, password,token){

       try{
       const headers = token ? {Authorization: `Bearer ${token}`,'Content-Type': 'application/json'} : {'Content-Type': 'application/json'}
       return  await Axios.post(`${this.url}/login`, {email,password} ,{headers})
       }
       catch(err){
        return err
       }
         
      

    }

}



module.exports = new AccountAPI()