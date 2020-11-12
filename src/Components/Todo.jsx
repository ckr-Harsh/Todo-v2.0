import React from 'react'
import './todo.css'
import  * as Mat from '@material-ui/icons'
import Button from '@material-ui/core/IconButton';
import { useState } from 'react';
import TodoLi from './TodoLi';

function Todo() {
    let [Item, setItem]=useState();
    let [Task,setTask]=useState([]);
    const Iphandler=(e)=>{
        setItem(e.target.value);
    }
    const Add_task= ()=>{
        setTask((preState)=>{
            return [...preState,Item];
        });
        setItem('');
    }
    const Dbl =(id)=>{
        setTask(( preState)=>{
            return preState.filter((arr,index)=>{
                return index != id;
            })
        })
    }
    return (
        <>
            <div className='first'>
                <div className='center'>
                    <h2>ToDo List</h2>
                    <input 
                     placeholder='Add Tasks'
                     value={Item}
                     onChange={Iphandler}
                     type='text'
                     />    
                    <Button className='add' onClick={Add_task}>
                        <Mat.Add/>
                    </Button>  
                    <ol>
                        {Task.map( (val,index)=>{
                            return <TodoLi text={val} key={index} id={index} onSelect={Dbl}/>
                        })}
                        
                        </ol>    
                </div>

            </div>
        </>
    )
}

export default Todo
