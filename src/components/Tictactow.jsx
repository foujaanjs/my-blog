import React, { useState } from 'react'



const Tictactow = () => {

  function Square(){

    const [value,setValue] = useState(1)
    

    function handleclick(){
      setValue('x');
    }
  
    return < button className="square" onClick={handleclick}> {value}</button>;
  }
  
  
  return (
    <main>
      <div className='board-row'>
      <Square value=  '1'/>
      <Square value = '2'/>
      <Square value = '3'/>
      </div>
      <div className='board-row'>
      <Square value='3'/>
      <Square value='4'/>
      <Square value='5'/>
      </div>
      <div className='board-row'>
      <Square value='6'/>
      <Square value='7'/>
      <Square value='8'/>
      </div>
    </main>
    
  )
}

export default Tictactow