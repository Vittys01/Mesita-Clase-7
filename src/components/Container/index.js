import React from 'react'
import Animals from '../Animals'
import './index.css'

export default class Container extends React.Component{
    constructor(props){
    super(props)
    console.log(props);
}

    render(){
    return (
        <div className="container">
        <h2>Bienvenidos</h2>
        {
            this.props.animals.map( (animal) => <Animals  name={animal.name} sex={animal.sex} age={animal.age} breed={animal.breed} size={animal.size} /> )
        } 
        </div>
    )
}
}