import axios from 'axios'

export const BASE_URL = "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list";


export const logoutEvent = () => {
  if(typeof window === 'undefined') return;
  window.location.href = "/logout";
}

export const NET = async (tipe, url, data,  isMultipart, isStream) => {
  
  tipe = (tipe||"GET")
  url = (url||"")
  data = (data||{})

  isMultipart = (isMultipart||false)
  isStream = (isStream||false)

  let objectResponse = {
    status : true,
    data : {}
  }

  try {
    const res = await axios({
      method : tipe,      
      url : (BASE_URL+url),      
      data,
      responseType : (isStream)?"stream":"json",
      headers : {
        'Content-Type' : (isMultipart)?"multipart/form-data":"application/json",
             
      }      
    }) 
    objectResponse.status = true
    objectResponse.data = res?.data     
  } 
  
  catch (error) {   
    if(/401/ig.test(error)){
      logoutEvent();    
    }
    objectResponse.status = false
    objectResponse.data = error?.response?.data    
  }

  return objectResponse

}

export const NET2 = async (tipe, url, data, token, pin, isMultipart, isStream) => {
  
  tipe = (tipe||"GET")
  url = (url||"")
  data = (data||{})
  token = (token||"")
  pin = (pin||"")
  isMultipart = (isMultipart||false)
  isStream = (isStream||false)

  let objectResponse = {
    status : true,
    data : {}
  }

  try {
    const res = await axios({
      method : tipe,      
      url : (url),      
      data,
      responseType : (isStream)?"stream":"json",
      headers : {
        'Content-Type' : (isMultipart)?"multipart/form-data":"application/json",
        'Authorization-pin' : pin,
        'Authorization' : `Bearer ${token}`,        
      }      
    }) 
    objectResponse.status = true
    objectResponse.data = res?.data     
  } 
  
  catch (error) {   
    if(/401/ig.test(error)){
      logoutEvent();    
    }
    objectResponse.status = false
    objectResponse.data = error?.response?.data    
  }

  return objectResponse

}
