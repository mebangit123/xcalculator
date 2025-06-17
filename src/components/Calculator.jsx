import React, { useState } from 'react'

const Calculator = () => {
  const [input, setInput] = useState('');
  const [firstOperand,setFirstOperand] = useState("")
  const [secondOperand, setSecondOperand] = useState("")
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');
  return (
    <div>
      <h1>React Calculator</h1>
      <div><input type="text" value={input} readOnly /></div>
      {result && (<div>{result}</div>)}
      <div onClick={(e) => {
        const btn = e.target.closest('button[data-value]');
        const val = btn.getAttribute('data-value');
        if(val == "c") {
          setInput('');
          setFirstOperand('')
          setSecondOperand('')
          setOperator('')
          setResult('');
          return;
        }
        if((!firstOperand && !secondOperand) && (val == '-' || val == '+' || val == '*' || val == '/' || val == '=')) {
          alert('Please enter the input..')
          return;
        }
        if(operator) {
          setSecondOperand(prev => prev + val);
        } else {
          setFirstOperand(prev => prev + val);
        }

        if(val == '-' || val == '+' || val == '*' || val == '/') {
          setOperator(val);
          setInput(prev => prev + val);
        }
        else if(operator && val == '=' && firstOperand != '' && secondOperand != '') {
          const operand1 = parseInt(firstOperand);
          console.log(operand1);          
          const operand2 = Number(secondOperand);
          console.log(operand2);
          let res;
          if(operator == '+') {
            res = operand1 + operand2;
          } else if(operator == '-') {
            res = operand1 - operand2;
          } else if(operator == '*') {
            res = operand1 * operand2        
          } else {
            res = operand1 / operand2
          }
          setResult(res);
        } else {
          setInput(prev => prev + val)
        }        
      }} 
           style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', columnGap: '10px', gap: '10px' }}                   
      >
        <button data-value={7}>7</button>
        <button data-value={8}>8  </button>
        <button data-value={9}>9</button>
        <button data-value={'+'}>+</button>
        <button data-value={4}>4</button>
        <button data-value={5}>5</button>
        <button data-value={6}>6</button>
        <button data-value={'-'}>-</button>
        <button data-value={1}>1</button>
        <button data-value={2}>2</button>
        <button data-value={3}>3</button>
        <button data-value={'*'}>*</button>
        <button data-value={'c'}>C</button>
        <button data-value={0}>0</button>
        <button data-value={'='}>=</button>
        <button data-value={'/'}>/</button>
      </div>
    </div>
  )
}

export default Calculator
