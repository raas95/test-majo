import React,{useState,useEffect} from "react";
import Modal from 'react-modal';
import { ImCross } from 'react-icons/im';
import {modalStyles,input,editButton,deleteButton} from '../helper/css'
import { connect } from 'react-redux';
import { deleteData,updateData,addData } from "../fungsi";
import {fetchData} from '../store/redux/actions'
const ModalEdit = (props) =>{
   const data = props?.detail 
   console.log({data})
   const [title,setTitle] = useState('')
   const [desc,setDesc] = useState('')
   const [tgl,setTgl] = useState('')
   const [time,setTime] = useState('')
   const [status,setStatus] = useState(0)
   useEffect(()=>{
    setTitle(data?.title)
    setTgl(data?.createdAt.split(' ')[0])
    setTime(data?.createdAt.split(' ')[1])
    setDesc(data?.description)
    setStatus(data?.status)
   },[data])
    const deleteColumn =()=>{
      let a = window.confirm('apakah anda yakin ingin menghapus data ini ?')
      if(a){
        let res = deleteData(props?.detail,props.data)
        alert('delete data berhasil')
        props.dispatch(fetchData(res))
        props?.onPress()
     }
    }
    const updateColumn =()=>{
      let a = window.confirm('apakah anda yakin ingin mengupdate data ini ?')
      if(a){
        let res = updateData(title,desc,tgl+' '+time,status,props?.detail,props.data)
        alert('update data berhasil')
        props.dispatch(fetchData(res))
        props?.onPress()
     }
    }
    const addColumn =()=>{
      if(title&&desc&&tgl&&time&&status){
        
      let a = window.confirm('apakah anda yakin ingin menambah data ini ?')
      if(a){
        let res = addData(title,desc,tgl+' '+time,status,props.data)
        alert('tambah data berhasil')
        props.dispatch(fetchData(res))
        props?.onPress()
     }
    }else{
      alert('gagal menambah data, data inputan tidak boleh kosong !!')
    }
    }
    return (
        <>
        
         <Modal 
           isOpen={props?.isOpen}
           contentLabel="Minimal Modal Example"
           style={modalStyles}
           onRequestClose={() =>props?.onPress()} 
             shouldCloseOnOverlayClick={true}
        >
        <ImCross onClick={()=>props?.onPress()} style={{marginBottom:10}} />
    
        <div    >
        <b  >Title</b><br/>
         <input value={title}  onChange={(e)=>setTitle(e.target.value)} style={input}/><br/>
         </div>
         <div    >
        <b  >Description</b><br/>
         <input value={desc} onChange={(e)=>setDesc(e.target.value)}  style={input}/><br/>
         </div>
         <div    >
        <b  >Created at</b><br/>
         <input  type='date'  onChange={(e)=>setTgl(e.target.value)} value={tgl}  style={input}/><br/>
         </div>
         <div    >
        <b  >Time at</b><br/>
         <input  type='time'  onChange={(e)=>{setTime(e.target.value);}} value={time}  style={input}/><br/>
         </div>
         <div    >
         <b  >Status</b><br/>
          <select onChange={(e)=>setStatus(e.target.value)} value={status}  style={input}>
            <option value={1}>Selesai</option>
            <option value={0}>Belum</option> 
          </select>
         </div>
        
         <button style={editButton} onClick={data?updateColumn:addColumn} >
            {data?'Edit':'Save'}
          </button>
        {data?.status==0?
         <button onClick={deleteColumn} style={deleteButton} >
            Delete
          </button>:null}
         
        </Modal>
        </>
    )

}
const mapStateToProps = state => {
  return {
    data:state.crud.data,
    detail: state.crud.detail
      
  }
}
export default connect(mapStateToProps)(ModalEdit)