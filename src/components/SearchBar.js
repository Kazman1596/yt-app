import React, {useState} from 'react'

const SearchBar = ({ onTermSubmit }) => {
    const [term, setTerm] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        onTermSubmit(term)
    }

    return (
        <div className='search-bar ui segment'>
            <form onSubmit={onSubmit} className='ui form'>
                <div className='field'>
                    <label>Video Search</label>
                    <input type='text' 
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    ></input>
                </div>
            </form>
        </div>
    )
}

export default SearchBar

// Refactoring SearchBar

// This component does not use any lifestyle methods, so useEffect
// probably doesn't have to be incorporated in

// The commented SearchBar component was the old one without the use of
// hooks.

// Please refer to 'videos' application for previous version