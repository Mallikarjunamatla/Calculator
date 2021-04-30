import "./styles.css";
import React,{useState} from 'react';
import Result from './components/Result';
import KeyPad from './components/KeyPad';




export default function App() {
  const [result,setResult] =useState("");

  const onclickHandle =(button) =>{
        if(button==='CE')
        {
          backSpace();
        }
        else if(button==='=')
        {
          calculate();

        }
        else if(button==='C')
        {
          reset();
        }
        else{
          setResult(result+button);
        }
  }
   function backSpace(){
      setResult(result.slice(0,-1));
   }

   function reset(){
     setResult("");

   }

   function calculate(){
     try {
       // eslint-disable-next-line
       setResult(eval(result) );
       
     } catch (error) {

       setResult("error");
       
     }
     
   }

  
  return (
    <div className="calculator-body">
      <h1>Simple Calculator</h1>
      <Result result={result} />
      <KeyPad onClick={onclickHandle} />
    </div>
  );
}
