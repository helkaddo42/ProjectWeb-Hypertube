import React, { useEffect } from 'react'

function Logout() {
    useEffect(()=>{
        localStorage.clear()
    })
    return (
        <>
            {window.location.reload(false)}
        </>
    )
}

export default Logout
