import React,{useState,useEffect} from "react";
import {table,tdTh} from '../helper/css'

import { connect } from 'react-redux';
import {detailData} from '../store/redux/actions'
 
const Table = (props) =>{
  
    
    return (
        <>
       
        <div style={{marginTop:10}}>
        <h2>{props?.title}</h2>
        <table style={table}>
            <tr>
                <th style={tdTh}>Id</th>
                <th style={tdTh}>Title</th>
                <th style={tdTh}>Deskripsi</th>
                <th style={tdTh}>Tanggal</th>
            </tr>
            {props?.data.map((v ,i)=>{
        
                return (
                    <tr onClick={()=>props.onDetail(v)} style={{backgroundColor:i%2==0?'#eff2f2':'white'}}>
                        <td style={tdTh}>{v?.id}</td>
                        <td style={tdTh}>{v?.title}</td>
                        <td style={tdTh}>{v?.description}</td>
                        <td style={tdTh}>{v?.createdAt}</td>
                    </tr>
                    
            )})}
            
            </table>
           
        </div>
        </>
    )

}

export default connect()(Table)