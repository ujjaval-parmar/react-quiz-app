import React from 'react'

const FinishScreen = ({ points, maxPossiblePoints, highscore, dispatch }) => {

    const percentage = (points * 100) / maxPossiblePoints;

    let emoji;
    if (percentage === 100) emoji = "🥇";
    if (percentage >= 80 && percentage < 100) emoji = "🎉";
    if (percentage >= 50 && percentage < 80) emoji = "🙃";
    if (percentage >= 0 && percentage < 50) emoji = "🤨";
    if (percentage === 0) emoji = "🤦‍♂️";


    return (
        <>
        <p className='result'>
            {emoji} You Scored <strong>{points}</strong>  out of {maxPossiblePoints} ({percentage.toFixed(2)}%)! 
        </p>
        <p className='highscore'>
            Highscore: {highscore} points
        </p>
        <button className='btn btn-ui' onClick={()=> dispatch({ type: 'reset'})}>
           Go to Home
        </button>
        </>
    )
}

export default FinishScreen