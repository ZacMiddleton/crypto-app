import {useState} from 'react'
export function SearchInput() {
    const [inputValue, setInputValue] = useState('')

    const onChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange}/>
        </div>
    )
}