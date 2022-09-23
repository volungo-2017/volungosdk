const Axios = require('axios')
const nookies = require("nookies") ;
class JobsAPI{


  constructor(){
      this.url = process.env.NEXT_PUBLIC_JOBS_HOST
  }

      async allJobs(){
        const cookies = nookies.parseCookies()
        const token =  cookies['volungo.token']
         try{
          const headers = token ? {Authorization: `Bearer ${token}`,'Content-Type': 'application/json'} : {'Content-Type': 'application/json'}
         return  await Axios.get(`${this.url}/jobs`, {} ,{headers})
         }
         catch(err){
          return err
         }
      }
      async   globalSearch(payload){
        const cookies = nookies.parseCookies()
        const token =  cookies['volungo.token']
         try{
          const headers = token ? {Authorization: `Bearer ${token}`,'Content-Type': 'application/json'} : {'Content-Type': 'application/json'}
         return  await Axios.post(`${this.url}/jobs/globalSearch`, payload ,{headers})
         }
         catch(err){
          return err
         }
           
      }

      async searchJob(idJob){

        const cookies = nookies.parseCookies()
        const token =  cookies['volungo.token']
         try{
          const headers = token ? {Authorization: `Bearer ${token}`,'Content-Type': 'application/json'} : {'Content-Type': 'application/json'}
         return  await Axios.get(`${this.url}/job/${idJob}`, {} ,{headers})
         }
         catch(err){
          return err
         }

      }

      async search(payload){

        const cookies = nookies.parseCookies()
        const token =  cookies['volungo.token']
         try{
          const headers = token ? {Authorization: `Bearer ${token}`,'Content-Type': 'application/json'} : {'Content-Type': 'application/json'}
         return  await Axios.post(`${this.url}/jobs/search`, payload ,{headers})
         }
         catch(err){
          return err
         }

      }

     
  
  }
  
  
  
  module.exports = new JobsAPI()