import React, { useState } from 'react'

function Calculator() {

  const [result, setresult] = useState('');

  {/*Onclickfunction*/ }
  const clickHandle = (e) => {
    setresult(result.concat(e.target.value));
  }

  {/*CLEAR THE RESULT*/ }
  const clearScreen = () => {
    setresult("");
  }

  {/*FUNCTION TO CAL */ }
  const calculate = () => {
    setresult(eval(result).toString());
  }

  return (

    <div className=' bg-gray-900 text-white w-screen h-screen flex justify-center items-center'>
      <div className='main w-64 h-auto bg-gray-900 rounded-2xl shadow-xl border-4 border-gray-100'>

        {/* {Screen} */}
        <div className='screen p-2'>
          <input
            value={result}
            type='text' className='text-black w-full shadow-[insert_0_2px_4px_rbga(0,0,0,0.6)] placeholder-black px-1 bg-gray-100 
          text-2xl pt-5 outline-none text-right' placeholder='0' />
        </div>


        {/* {Brand} */}

        <div className='brand bg-gray-200 bg-opacity-90 mb-2'>
          <h1 className='text-gray-900 text-xs font-bold text-center'>Sarvesh</h1>
        </div>


        {/* {Keyboard} */}

        <div className="keyboard">
          <div className="flex justify-between m-2">
            <input type='button' onClick={clearScreen} value="C" className='bg-red-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
            <input type='button' onClick={clickHandle} value="<" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
            <input type='button' onClick={clickHandle} value="%" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
            <input type='button' onClick={clickHandle} value="/" className='bg-red-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
          </div>
          <div className="flex justify-between m-2">
            <input type='button' onClick={clickHandle} value="7" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
            <input type='button' onClick={clickHandle} value="8" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
            <input type='button' onClick={clickHandle} value="9" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
            <input type='button' onClick={clickHandle} value="*" className='bg-green-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
          </div>
          <div className="flex justify-between m-2">
            <input type='button' onClick={clickHandle} value="4" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
            <input type='button' onClick={clickHandle} value="5" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
            <input type='button' onClick={clickHandle} value="6" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
            <input type='button' onClick={clickHandle} value="-" className='bg-blue-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
          </div>
          <div className="flex justify-between m-2">
            <input type='button' onClick={clickHandle} value="1" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
            <input type='button' onClick={clickHandle} value="2" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
            <input type='button' onClick={clickHandle} value="3" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
            <input type='button' onClick={clickHandle} value="+" className='bg-purple-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
          </div>
          <div className="flex justify-between m-2">
            <input type='button' onClick={clickHandle} value="0" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
            <input type='button' onClick={clickHandle} value="00" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
            <input type='button' onClick={clickHandle} value="." className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
            <input type='button' onClick={calculate} value="=" className='bg-orange-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator