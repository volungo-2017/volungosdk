const Axios = require('axios')

class PostAPI{
   
  constructor(){
      this.url = process.env.NEXT_PUBLIC_POSTS_HOST
  }
      async   publish(payload,token){
         try{
          const headers = token ? {Authorization: `Bearer ${token}`,'Content-Type': 'application/json'} : {'Content-Type': 'application/json'}
         return  await Axios.post(`${this.url}/posts`, payload ,{headers})
         }
         catch(err){
          return err
         }
           
      }

     
  
  }
  
  
  
  module.exports = new PostAPI()