import React, {Component} from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1>I'm <strong>James DeLay</strong>, a Full Stack Web Developer with a passion for all things JavaScript.
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
