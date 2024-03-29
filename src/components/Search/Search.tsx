type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

import { useState, KeyboardEvent } from "react"
import { BsSearch } from "react-icons/bs"
import classes from './Search.module.css'

export const Search = ({loadUser}: SearchProps) => {
    const [userName, setUserName] = useState("")

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            loadUser(userName)
        }
    }

    return (
        <div className={classes.search}>
            <h2>Search for a user:</h2>
            <p>Get to know your best repositories</p>
            <div className={classes.search_container}>
                <input 
                    type="text" 
                    placeholder="Enter username" 
                    onChange={(e)=> setUserName(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={() => loadUser(userName)}>
                    <BsSearch/>
                </button>
            </div>
        </div>
    )
}