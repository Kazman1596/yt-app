import { useState, useEffect } from 'react'
import youtube from '../api/youtube'

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        search(defaultSearchTerm)
    }, [defaultSearchTerm])

    const search = async (term) => {
        const response = await youtube.get('/search', {
             params: {
                 q: term
             }
        })
        setVideos(response.data.items)         
    }

    return [videos, search]
}

export default useVideos

// -- A NOTE ON CUSTOM HOOKS -- //

// - Best way to create reusable code in a React project (besides components)

// - Created by extracting hook-related code out of a function component

// - Custom hooks always make use of at least one primitive hook internally

// - Each custom hook should have one purpose

// - Kind of an art form!

// - Data-fetching is a great thing to try to make reusable and into a custom hook


// -- PROCESS FOR CREATING REUSABLE HOOKS -- //

// 1. Identify each line of code related to some single purpose

// 2. Identify the inputs to that code

// 3. Identify the outputs to that code

// 4. Extract all of the code into a seperate function, receiving the inputs as
//      arguments, and returning the outputs

// -- ESSENTIALLY FOR THIS CASE -- //

//      If you give me a:

//     -default search term-

//       I will give you:

//   -a way to search for videos-
//      -a list of videos-

// ** When completed, the same error I warned about earlier occurs:
// useEffect has a missing dependancy: 'defaultSearchTerm'. Either include it or remove the dependency array

// In this case, including it into the array is okay, and wont have bugs. (Will simply rerender if we were ever to change the defaultSearchTerm)