import React, { useEffect } from 'react'

const Timer = ({ dispatch, secondsRemaining }) => {


 const mins = Math.floor(secondsRemaining / 60);
 const seconds = secondsRemaining % 60;

  useEffect(()=>{

    let timer = setInterval(()=>{
        dispatch({ type: 'tick'});
    }, 1000)

    // console.log(secondsRemaining);

   return ()=>clearInterval(timer);

  }, [dispatch])



  return (
    <div className='timer'>{String(mins).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</div>
  )
}

export default Timer