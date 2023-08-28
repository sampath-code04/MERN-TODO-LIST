import './styles/Addtask.css'
import React , {useState} from 'react'
import axios from 'axios'
function Addtask(props) {
    const [task,setTask] = useState("")
    const addtask = () => {
        if(task.trim() === ''){
            return 
        }else {
            axios.post('http://localhost:5000/api/tasks' , {
                todo : task,
                isComplete : false
            }).then(res => {
                setTask("")
                props.addTask(res.data)
            }).catch(err => console.log(err))
        }
    }
  return (
    <div className='addtask'>
        <input type='text' placeholder='Add Task . . .' value={task} onChange = {event => setTask(event.target.value)} />
        <button onClick={() => addtask()}>Add Task</button>
    </div>
  )
}

export default Addtask