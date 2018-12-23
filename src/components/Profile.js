import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    console.log(this.props)
       // this.props.img_url = 'http://via.placeholder.com/350x150'
     const style = {
        padding: '10px',
        border: '1px solid green',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '50%',
        color: '#4db1e8',
        textAlign: 'center',
        fontFamily: 'sans-serif'
    }
    return (
       
      <div style = {style}>
          <img src={this.props.logo_url} height = "250px"/>
        <h1>{this.props.title}</h1>
      </div>
      
    )
    
  }
}
