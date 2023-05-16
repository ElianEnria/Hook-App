import { useCounter, useFetch } from "../hooks";
import { LoadingQuotes, Quotes } from './'

export const MultipleCustomHooks = () => {
    //llamar al hook
    const { counter, increment } = useCounter(1)

    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
    const { author, quote } = !!data && data[0]; // es como decir si data es true ejecuta el valor de la data
    return (
        <>
            <h1> BreakingBad Quotes </h1>
            <hr />
            {   //principio Single Responsibility Principle
                isLoading 
                    ? <LoadingQuotes /> // ? si esta en true
                    : <Quotes author={author} quote={quote}/> // caso contrario
            }
            <button className="btn btn-primary" onClick={() => increment()} disabled={isLoading}>
                Next quote
            </button>

        </>
    )
}
