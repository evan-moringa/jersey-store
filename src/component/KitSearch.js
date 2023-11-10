import React from 'react';

function KitSearch(props) {
    

    const handleChange = (event) =>{
    
        props.handleChange(event.target.value)
    }

    const handleSearch = (event) => {
        event.preventDefault()
        props.handleClear(props.query)
         
        props.setQuery("")
            
    }

    
        return (
            <div>
                <form>
                    <input name="query" placeholder="Search" value={props.query} type="text" onChange={event => handleChange(event)}></input>
                    <button onClick={event => handleSearch(event)} type="button">Enter</button>
                </form>
            </div>
        );
    }


export default KitSearch;