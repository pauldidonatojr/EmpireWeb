import React from 'react';
import { useLocation } from 'react-router-dom'

function MemberDetails(props) {

    const location = useLocation()
    const { from } = location.state
    console.log(from);
    return (
        <div>
            <h1>Details for {from}</h1>

        </div>
    );
}

export default MemberDetails;