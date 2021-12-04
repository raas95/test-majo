import React from "react";
import {table,tdTh} from '../helper/css'
import {AiOutlinePlusCircle} from 'react-icons/ai'
const Table = (props) =>{

    return (
        < >
         <h1>To do aplication <AiOutlinePlusCircle onClick={()=>props.onAdd()} size={30} color='blue'/></h1>
         
        </>
    )

}

export default Table