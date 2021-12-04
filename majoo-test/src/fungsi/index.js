 
export const olahData = (data) =>{
    
    let done = []
    let pending = []
    let objectResponse = []
    data?.map((v)=>{
        if(v.status===0||v.status==='0'){
            pending.push(v)
        }else{
            done.push(v)
        }
    
    })
    objectResponse[0]  = {data:desc(done),title:'Selesai'}
    objectResponse[1]  = {data:asc(pending),title:'Belum selesai'}
    
      return objectResponse  

}
export const asc =(data)=>{
    let res = data?.sort((a, b) =>   new Date(a.createdAt)-new Date(b.createdAt) ) 
    return res
}
export const desc =(data)=>{
    let res = data?.sort((a, b) => new Date(b.createdAt)-  new Date(a.createdAt) ) 
    return res
}
export const deleteData =(detail,data)=>{
    
    let array = []
    data?.map((v)=>{
         array.push(v.id)
    
    })
    var index = array.indexOf(detail?.id);
  
    if (index !== -1) {
        data.splice(index, 1);
      }
      console.log({data})
      return data
   
}
export const updateData =(title,description,createdAt,status,detail,data)=>{
    
    let array = []
    data?.map((v)=>{
         array.push(v.id)
    
    })
    var index = array.indexOf(detail?.id);
  
    if (index !== -1) {
        data[index] = {id:detail?.id,title,description,createdAt,status}
      }
      
      return data
   
}
export const addData =(title,description,createdAt,status,data)=>{
   
    let array = []
    data?.map((v)=>{
         array.push(v.id)
    
    })
    console.log({aaa:array.sort(),bbb:array[array.length-1]})
    
    data.push({id:array[array.length-1]+1,title,description,createdAt,status})
     
      
      return data
     
   
}