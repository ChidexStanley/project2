import  Alert  from 'react-bootstrap/Alert'
import React from 'react'

function Todo(props) {
  return (
    <div>
           <Alert key="primary" variant="primary" className='todoAlert'>
        {props.key} {props.data}
          </Alert> 
    </div>
  )
}

export default Todo
