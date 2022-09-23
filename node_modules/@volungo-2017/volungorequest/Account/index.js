const Axios = require('axios')
const nookies = require("nookies") ;

class AccountAPI{
   
constructor(){
    this.url = process.env.NEXT_PUBLIC_ACCOUNT_HOST
}
    async   login(email, password){

   try{
    const cookies = nookies.parseCookies()
    const token =  cookies['volungo.token']
    const headers = token ? {Authorization: `Bearer ${token}`,'Content-Type': 'application/json'} : {'Content-Type': 'application/json'}
       return  await Axios.post(`${this.url}/login`, {email,password} ,{headers})
       }
       catch(err){
        return err
       }
         
    }

    async register(data){
        try{
        const headers =  {'Content-Type': 'application/json'}
        return  await Axios.post(`${this.url}/register`, data ,{headers})
        }
        catch(err){
         return err
        }
     }

     async find(id){
        try{
            const headers = {'Content-Type':'application/json'}
            return await Axios.get(`${this.url}/user/${id}`,{},{headers})

        }catch(err){
            return err
        }
     }

     async surfleUser(){
        try{
            const headers = {'Content-Type':'application/json'}
            return await Axios.get(`${this.url}/user/surfle/false`,{},{headers})

        }catch(err){
            return err
        }
     }

}



module.exports = new AccountAPI()