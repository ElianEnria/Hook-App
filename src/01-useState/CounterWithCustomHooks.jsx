import { useCounter } from "../hooks"


export const CounterWithCustomHooks = () => {
    // maneja los counters 
    const { counter,increment, subtract, reset } = useCounter();


  return (
    <>
        <h1>Counter with Hooks:  {counter} </h1>
        <hr />
        <button className="btn btn-primary" onClick={() => increment(2) } >+1</button>
        <button className="btn btn-primary" onClick={() => subtract(2)}>-1</button>
        <button className="btn btn-primary" onClick={reset}>Reset</button>
    </>
  )
}
