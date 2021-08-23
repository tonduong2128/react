import React from 'react';
import Couter from '../components/Counter'


export default function CouterPage(props){
    return (
        <div>
           
            <Couter>
                {({count})=><div>{count}</div>}
            </Couter>
        </div>
        
    )
}