import React from 'react';
import axios from 'axios';

const Repassword = ({match}) => {
    return (
        <div>
        {match.params.Token}
        {console.log('hello2')} <br/>
        KUAY
    </div>    
    )

}

export default Repassword;