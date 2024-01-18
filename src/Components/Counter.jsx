import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'
import { useState } from 'react'

function Counter() {
  const[range,setrange]=useState(1)
  console.log("rangee issss",range)
  const dispatch=useDispatch()
  const count=useSelector(state=>state.counter.value)
  return (
    <div className=" d-flex align-items-center justify-content-center w-100 mt-2 flex-column">
        <h1 className='text-primary'>{count}</h1>
        <div className='mt-5'>
            <button className='btn btn-danger' onClick={()=>dispatch(increment(Number(range)))}>Increment</button>
            <button className='ms-2 btn btn-success' onClick={()=>dispatch(decrement (Number(range)))}>Decrement</button>
            <button className='ms-2 btn btn-primary' onClick={()=>dispatch(reset())}>Reset</button>
        </div>
        <div>
          <input type="text" className='form-control w-100 mt-5'   placeholder='Enter Range' style={{border:"blue"}} onChange={(e)=>setrange(e.target.value)}/>
        </div>
        </div>
  )
}

export default Counter