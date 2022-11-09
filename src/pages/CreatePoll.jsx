import React, { useState } from 'react'
import Header from '../components/Header'
import { FaPhoneAlt, FaUser } from 'react-icons/fa'


const CreatePoll = () => {

    const [date, setDate] = useState('');
    const [question, setQuestion] = useState('');
    const [answer, setAnswer]= useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(date);
        console.log(question);
        console.log(answer);
    }   
    return (
    
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category='' title='Create Poll'/>
            <div className='w-full bg-gray-300 p-4 rounded-lg shadow-sm h-400'>
            <form onSubmit={handleSubmit}>
                
            <div className="relative mb-4">
                <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400"><FaPhoneAlt /></span>
                <input 
                onChange={event => setDate(event.target.value)}
                placeholder='Date'
                type='date'
                required
                    className='outline-none
                    bg-gray-200
                    placeholder-gray-500
                    text-black
                    pl-9 pr-4 py-2
                    w-full
                    rounded-lg
                    transition 
                    focus:ring-2 
                    focus:ring-blue-300' />
            </div>

            <div className="relative mb-4">
                <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400"><FaPhoneAlt /></span>
                <input 
                onChange={event => setQuestion(event.target.value)}
                placeholder='Question'
                type='text'
                required
                    className='outline-none
                    bg-gray-200
                    placeholder-gray-500
                    text-black
                    pl-9 pr-4 py-2
                    w-full
                    rounded-lg 
                    transition 
                    focus:ring-2 
                    focus:ring-blue-300' />
            </div>
            <div className="relative mb-4">
                <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400"></span>
                <textarea 
                onChange={event => setAnswer(event.target.value)}
                placeholder='Answer'
                type='text'
                required
                    className='outline-none
                    rows="8"
                    bg-gray-200
                    placeholder-gray-500
                    text-black
                    pl-9 pr-4 py-2
                    w-full
                    rounded-lg 
                    transition 
                    focus:ring-2 
                    focus:ring-blue-300' />
            </div>
            <button className='w-1/2 bg-blue-400 pt-4 pb-4 rounded-lg text-3xl text-white'>
                 SUBMIT
            </button>

            </form>
        </div>
            
        </div>
    )
}

export default CreatePoll
