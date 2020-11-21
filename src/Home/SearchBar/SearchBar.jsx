import React, {useState} from 'react'
import './searchBar.css'
import Button from 'react-bootstrap/Button'

function SearchBar({searchClick}) {

    const [value, setValue] = useState('')

    const submit=(e)=>{
        e.preventDefault();
        searchClick(value)
        setValue('')
    }

    return (
        <div className='searchBar'>
            <div className='search' >
                <form className='input_buttonSearch' onSubmit={submit}>

                    <input type="text" value={value}  onChange={e=>setValue(e.target.value)} />
                    <Button   onClick={submit} variant="outline-dark" >Search</Button>
                </form>
            </div>
        </div>  
    )
}

export default SearchBar
