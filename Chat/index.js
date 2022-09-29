const Axios = require('axios')
const nookies = require("nookies") ;
class ChatAPI{


  constructor(){
      this.url = process.env.NEXT_PUBLIC_CHAT
  }

      async postMessage(payload){
        const cookies = nookies.parseCookies()
        const token =  cookies['volungo.token']
         try{
          const headers = token ? {Authorization: `Bearer ${token}`,'Content-Type': 'application/json'} : {'Content-Type': 'application/json'}
         return  await Axios.post(`${this.url}/save`, payload ,{headers})
         }
         catch(err){
          return err
         }
      }
      

     
  
  }
  
  
  
  module.exports = new ChatAPI()