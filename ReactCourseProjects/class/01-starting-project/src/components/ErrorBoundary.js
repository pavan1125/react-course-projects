import React from "react";


export default class ErrorBoundary extends React.Component{
    constructor(){
        super()
        this.state={
            error:false
        }
    }
    componentDidCatch(error){
        this.setState({error:true})
    }
  
    render(){
       if(this.state.error){
        return <p>some error occured</p>
       }
       return this.props.children
    }

 
}