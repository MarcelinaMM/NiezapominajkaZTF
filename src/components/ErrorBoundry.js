import React, { Component } from 'react';
import  './Rooms/Rooms.css'

class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({ hasError: true })
    }

    render(){
        if (this.state.hasError){
            return <h1 className="title has-text-centered error">Oooops. Brak wyników</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;