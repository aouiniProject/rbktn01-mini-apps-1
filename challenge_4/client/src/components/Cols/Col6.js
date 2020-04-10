import React, { Component } from 'react'

class Col6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            31: "white",
            32: "white",
            33: "white",
            34: "white",
            35: "white",
            36: "white"

        }
        this.col = [
            0,
            0,
            0,
            0,
            0,
            0
        ]
        this.on_click = this.on_click.bind(this)
    }

    on_click(row, col, id) {

    }
    render() {
        return (
            <div id="Col6" className="columns">
                <div className="elements" style={{ backgroundColor: this.state[31] }} id="31" onClick={this.on_click(0, 5, "31")}>.</div>
                <div className="elements" id="32" style={{ backgroundColor: this.state[32] }} onClick={this.on_click(1, 5, "32")}>.</div>
                <div className="elements" id="33" style={{ backgroundColor: this.state[33] }} onClick={this.on_click(2, 5, "33")}>.</div>
                <div className="elements" id="34" style={{ backgroundColor: this.state[34] }} onClick={this.on_click(3, 5, "34")}>.</div>
                <div className="elements" id="35" style={{ backgroundColor: this.state[35] }} onClick={this.on_click(4, 5, "35")}>.</div>
                <div className="elements" id="36" style={{ backgroundColor: this.state[36] }} onClick={this.on_click(5, 5, "36")}>.</div>


            </div>

        )
    }
}

export default Col6;