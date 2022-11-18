
import {Conteiner,Content,Row} from './styles'
import { Input } from './components/Input/index.js'
import Button from './components/Button';
import { useState } from 'react';

// icon
import { FiDelete} from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";


function App() {


const [currentNumber,setCurrenteNumber] = useState('0') ;//Estado inicial
const [firstNumber,setFirstNumber] = useState('0');
const [operation, setOperation] = useState('')



const handleClearOne = () => {
  setCurrenteNumber(currentNumber.substring(0, currentNumber.length-1))
}

const handleClear = () => {
  setCurrenteNumber('0')  //Limpar os números
  setFirstNumber('0')
  setOperation('')
}


const handleAddNumber =  (num) => {  
  setCurrenteNumber(prev => `${prev === '0' ? '' : prev}${num}`) //Alterar o estado inicial
} 

const handleSumNumbers = () => {
  if (firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrenteNumber('0')
    setOperation('+')
  }else {
    const sum = Number (firstNumber) + Number (currentNumber) ;
    setCurrenteNumber(String(sum))
    setOperation('')
   }

}

const handleMinusNumbers = () => {
  if (firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrenteNumber('0')
    setOperation('-')
  }else {

    const sum = Number (firstNumber) - Number (currentNumber);
    setCurrenteNumber(String(sum))
    setOperation('')
   }

}

const handleMultNumbers = () => {
  if (firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrenteNumber('0')
    setOperation('*')
  }else {

    const sum = Number (firstNumber) * Number (currentNumber);
    setCurrenteNumber(String(sum))
    setOperation('')
   }

}


const handleDiviNumbers = () => {
  if (firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrenteNumber('0')
    setOperation('/')
  }else {

    const sum = Number (firstNumber) / Number (currentNumber);
    setCurrenteNumber(String(sum))
    setOperation('')
   }

}

const handleX2Numbers = () => {
  if (firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrenteNumber('0')
    setOperation('**')
  }else {
    const sum = (Number (firstNumber) ** Number (currentNumber)) ;
    setCurrenteNumber(String(sum))
    setOperation('')
   }

}


const  handleEquals = () => {
  if (firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
    switch(operation) {
      case '+':
      handleSumNumbers();
      break;
      case '-':
      handleMinusNumbers();
      break;
      case '*':
      handleMultNumbers();
      break;
      case '/':
      handleDiviNumbers();
      break;
      case '**':
      handleX2Numbers();
      break;
      
        
      default:
      break;
    }

  }
}

  return (
    <Conteiner>
      <Content>
      <Input value={currentNumber}/>
      
      <Row>
      <Button label=<FiDelete/>  onClick={handleClearOne}/>
      <Button label=<RiDeleteBinLine/>  onClick={handleClear}/>
      <Button label="x²"  onClick={handleX2Numbers}/>
      </Row>

      

      <Row>
      <Button label="7" onClick={() => handleAddNumber('7')} />
      <Button label="8" onClick={() => handleAddNumber('8')}/>
      <Button label="9" onClick={() => handleAddNumber('9')}/>
      <Button label="/" onClick={handleDiviNumbers}/>
      </Row>

      <Row>
      <Button label="4" onClick={() => handleAddNumber('4')}/>
      <Button label="5" onClick={() => handleAddNumber('5')}/>
      <Button label="6" onClick={() => handleAddNumber('6')}/>
      <Button label="-" onClick={handleMinusNumbers} />
      </Row>

      <Row>
      <Button label="1" onClick={() => handleAddNumber('1')}/>
      <Button label="2" onClick={() => handleAddNumber('2')}/>
      <Button label="3" onClick={() => handleAddNumber('3')}/>
      <Button label="+" onClick={handleSumNumbers}/>
      </Row>

      <Row>
      <Button label="." onClick={() => handleAddNumber('.')} />
      
      <Button label="0" onClick={() => handleAddNumber('0')}/>
      <Button label="x" onClick={handleMultNumbers}/>

      <Button label="=" onClick={handleEquals}/>
      </Row>

     
  




      </Content>

    </Conteiner>
  )  
}

export default App;
