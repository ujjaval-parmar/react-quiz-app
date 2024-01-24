import React from 'react'

const Options = ({ question, dispatch, answer }) => {

    const hasAnsered = answer !== null;

    return (

        <div className='options'>
            {question.options.map((option, index) => <button className={`btn btn-option ${index === answer ? 'answer' : ''} ${hasAnsered && index === question.correctOption ? 'correct': 'wrong'}`}
            key={option}
            onClick={()=> dispatch({ type:'newAnswer', payload: index })}
            disabled={ hasAnsered }
            >{option}</button>)}
        </div>




    )
}

export default Options