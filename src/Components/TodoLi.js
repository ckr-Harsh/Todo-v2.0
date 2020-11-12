import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import './todo.css'
import * as Mat from '@material-ui/icons'

function TodoLi(props) {
    let [line,setLine]=useState()

    const Cross=()=>{setLine(true);}
    
    return (
        <> 
        <div className='rambo'>
             
                <span className='span'> 
                <Button 
                      className='delete'
                       onClick={Cross} 
                       onDoubleClick={()=>{
                            props.onSelect(props.id)
                       }}   
                       >
                    <Mat.Delete/>
              </Button></span>
              <li style={{textDecoration: line?'line-through': 'none'}}>{props.text}</li>
                  </div>
        </>
    )
}

export default TodoLi
