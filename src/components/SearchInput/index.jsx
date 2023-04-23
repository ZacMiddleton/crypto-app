import {useState} from 'react'
export function SearchInput() {
    const [inputValue, setInputValue] = useState('')

    const onChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <>
            <input type="text" placeholder='Search...' value={inputValue} onChange={onChange}/>
        </>
    )
}