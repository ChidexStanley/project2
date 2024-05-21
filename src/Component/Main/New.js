import React, { useState } from 'react'
import "./Main.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Todo from '../Todo/Todo';

function New() {

    const [items, setItems] = useState(["go to market", "fetch water ", "cook food"]);
    const [item, setItem] = useState("");

    function addItem() {
        const newItems = [...items, item.trim()]
        setItems(newItems)
        if ( items !== "") {
            setItem("")
        }
    }

    return (
        < div >
            <div className='main'>
                <h1 className='mainheading'>What is on the calender today??</h1>

                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}

                    className="mainBox"
                >
                    <TextField fullWidth label="Add your item" id="fullWidth" value={item} onChange={(e) => { setItem(e.target.value) }} />
                </Box>

                <Button variant="contained" className='btn2' onClick={addItem}>Add</Button>
                <div className='items'>
                    {items.map((i, index) => {return( < Todo key ={index + 1} data={i} /> )})}
                </div>
            </div>

        </div >
    )
}

export default New