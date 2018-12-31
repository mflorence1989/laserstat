import React, { Component} from 'react'


export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Mario'
    }
  }

  render () {
    return (<header>
      <div className="logo"> Laser Lipo </div>
      <nav>
      <a href="#">Bio</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
      <a href="#" className="register-btn">Consultation</a>
      </nav>
      </header>)
  }
}
