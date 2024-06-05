import "./App.css";
import {useState} from "react";
function App() {

  const [counter, setCounter]= useState(0);

  function decrementHandler(){
    setCounter(counter-1);
  }


  function incrementHandler(){
    setCounter(counter+1);
  }

  function resetHandler(){
    setCounter(0);
  }
  return (
   <div className="h-[100vh] w-[100vw] bg-blue-500 flex flex-col justify-center items-center">
      <div className="text-white text-2xl font-bold">Increment & Decrement</div>
      <div className="flex bg-white h-[4rem] mt-4 w-[18rem] justify-between rounded-sm">
        <div className="text-[3rem] border-r-2 border-black pr-[20px] h-[70%] w-[30%] justify-center items-center mt-[10px] relative">
        <button className="ml-[27px] absolute top-[-17px]" onClick={decrementHandler}>-</button>
        </div>
        <div className="text-[2rem] mt-[0.5rem] font-bold">{counter}</div>
        <div className="text-[3rem] border-l-2 border-black pr-[20px] h-[70%] w-[30%] justify-center items-center mt-[10px] relative">
        <button className="ml-[20px] absolute top-[-20px]" onClick={incrementHandler}>+</button>
        </div>
      </div>

      <div className="w-[6rem] h-[2.6rem] m-6 rounded-sm bg-red-600 text-white flex items-center justify-center">
        <button className="text-[20px]" onClick={resetHandler}>Reset</button>
      </div>
   </div>
  );
}

export default App;
