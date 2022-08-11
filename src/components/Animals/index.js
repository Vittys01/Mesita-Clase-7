import React from 'react'
import './index.css'

export default class Animals extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <h2>Nombre: {this.props.name}</h2>
                <li>Edad: {this.props.age}</li>
                <li>Sexo: {this.props.sex}</li>
                <li>Raza: {this.props.breed}</li>
                <li>Tamaño: {this.props.size}</li>
            </div>
        )
    }
}