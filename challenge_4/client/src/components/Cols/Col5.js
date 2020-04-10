import React, { Component } from 'react'

class Col5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            25: "white",
            26: "white",
            27: "white",
            28: "white",
            29: "white",
            30: "white"
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
            <div id="Col5" className="columns">
                <div className="elements" style={{ backgroundColor: this.state[25] }} id="25" onClick={this.on_click(0, 4, "25")}>.</div>
                <div className="elements" id="26" style={{ backgroundColor: this.state[26] }} onClick={this.on_click(1, 4, "26")}>.</div>
                <div className="elements" id="27" style={{ backgroundColor: this.state[27] }} onClick={this.on_click(2, 4, "27")}>.</div>
                <div className="elements" id="28" style={{ backgroundColor: this.state[28] }} onClick={this.on_click(3, 4, "28")}>.</div>
                <div className="elements" id="29" style={{ backgroundColor: this.state[29] }} onClick={this.on_click(4, 4, "29")}>.</div>
                <div className="elements" id="30" style={{ backgroundColor: this.state[30] }} onClick={this.on_click(5, 4, "30")}>.</div>


            </div>

        )
    }
}

export default Col5;