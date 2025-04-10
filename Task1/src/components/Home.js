import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../features/userDataSlice';

const Home = () => {

    const data = useSelector((state)=>state.app);
    
    const dispatch = useDispatch();

    const handleClick = ()=>{
        dispatch(getUser())
    }

  return (
    <div>
        <button onClick={handleClick}>onCLick</button>
        {data.users.length > 0 ? data.users.map((element,key)=>{
            return (
                <>
                    <h1>{element.name}</h1>
                </>
            )
        }):""}
    </div>
  )
}

export default Home