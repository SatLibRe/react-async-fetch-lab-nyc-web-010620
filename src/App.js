// create your App component here
import React from 'react';

export default class App extends React.Component {
<<<<<<< HEAD
  
  componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json())
        .then(response => {
          console.log(response)
        })
  }
  
  render(){
    return(
        "Hey"
    )
  }
  
=======
  render(){
    return(
        componentDidMount(){
          fetch("http://api.open-notify.org/astros.json")
        }
      )
  }
>>>>>>> eafd8a8873cae557895df8a2feee5183038be2e6
}