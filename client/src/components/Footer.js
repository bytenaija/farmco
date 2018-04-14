import React, { Component } from 'react';
import "../css/footer.css"


class  Footer extends Component {
    constructor(props) {
        super(props)
        this.state={
            username:'',
            password:''
        }
    }   
   
    render() {
    return (
        <div className="footer">
        <div className="socials">&copy;2018 Bytenaija.com.ng</div>

        </div>
    )}
}

export default Footer;