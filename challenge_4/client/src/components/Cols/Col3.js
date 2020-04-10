import React, { Component } from 'react'

class Col3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            13: "white",
            14: "white",
            15: "white",
            16: "white",
            17: "white",
            18: "white"
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
            <div id="Col3" className="columns">
                <div className="elements" style={{ backgroundColor: this.state[13] }} id="13" onClick={this.on_click(0, 2, "13")}>.</div>
                <div className="elements" id="14" style={{ backgroundColor: this.state[14] }} onClick={this.on_click(1, 2, "14")}>.</div>
                <div className="elements" id="15" style={{ backgroundColor: this.state[15] }} onClick={this.on_click(2, 2, "15")}>.</div>
                <div className="elements" id="16" style={{ backgroundColor: this.state[16] }} onClick={this.on_click(3, 2, "16")}>.</div>
                <div className="elements" id="17" style={{ backgroundColor: this.state[17] }} onClick={this.on_click(4, 2, "17")}>.</div>
                <div className="elements" id="18" style={{ backgroundColor: this.state[18] }} onClick={this.on_click(5, 2, "18")}>.</div>


            </div>
        )
    }
}

export default Col3;