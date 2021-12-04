import {NET} from '../../helper/axios'
  
export const getData = async () => {   
   
  const res = await NET("GET", ``,{})
  
  return res
}
