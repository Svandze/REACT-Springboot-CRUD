import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text-muted">CRUD ANGULAR Taller de lenguajes de programacion</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
