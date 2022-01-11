import React,{ useState,useEffect} from 'react'
import {getData} from '../store/api'
import { connect } from 'react-redux';
import {olahData} from '../fungsi'
import Table from '../component/table'
import Header from '../component/header'
import {fetchData,detailData} from '../store/redux/actions'
import ModalEdit from '../component/modal';
const Home=(props)=> {
    const [data,setData]=useState([])
    const [isOpen, setIsOpen] =  useState(false); 
         useEffect(()=>{
          getDatas()
         
         },[props.data,isOpen])
      const getDatas = async  ()=>{ 
          let res = await getData()
         let resOlah = olahData(props.data?props.data:res?.data)
         if(!props.data){
          props.dispatch(fetchData(res?.data))
         }
          
         setData(resOlah)
             
         
       }
       
  return (
    <div style={{marginRight:50,marginLeft:50}} >
      <Header  onAdd={()=>{setIsOpen(true);props.dispatch(detailData(null))}}/>
      {data.map((v )=>{
        
        return (<Table  onDetail={(v)=>{props.dispatch(detailData(v));setIsOpen(true)}}   data={v.data} title={v.title} />)
      })
      }
      <ModalEdit isOpen={isOpen} onPress={()=>setIsOpen(!isOpen)} />
    </div>
  );
}
 
const mapStateToProps = state => {
  return {
    data: state.crud.data
      
  }
}
export default  connect(mapStateToProps)(Home);
