import React from 'react';
import uniqid from 'uniqid';


import List from '../components/List'
const data=['A','B','C','D','E','F','G','H','I','J']


export default function ListPage(props){
    return (
        <List data={data} render={(item)=><div key={uniqid()}>{item}</div>}></List>
    )
}