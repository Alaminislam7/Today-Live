import React from 'react'
import { Link } from 'react-router-dom'

export default function StreamList() {
    return (
        <div>
            <h1>List</h1>
            <Link to='/streams/edit/:4'>
                GO
            </Link>
        </div>
    )
}
