import React, { Component } from 'react';

class Col2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            7: "white",
            8: "white",
            9: "white",
            10: "white",
            11: "white",
            12: "white",

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
            <div id="Col2" className="columns">
                <div className="elements" style={{ backgroundColor: this.state[7] }} id="8" onClick={this.on_click(0, 1, "8")}>.</div>
                <div className="elements" id="9" style={{ backgroundColor: this.state[8] }} onClick={this.on_click(1, 1, "9")}>.</div>
                <div className="elements" id="10" style={{ backgroundColor: this.state[9] }} onClick={this.on_click(2, 1, "10")}>.</div>
                <div className="elements" id="11" style={{ backgroundColor: this.state[10] }} onClick={this.on_click(3, 1, "11")}>.</div>
                <div className="elements" id="12" style={{ backgroundColor: this.state[11] }} onClick={this.on_click(4, 1, "12")}>.</div>
                <div className="elements" id="13" style={{ backgroundColor: this.state[12] }} onClick={this.on_click(5, 1, "13")}>.</div>

            </div>
        )
    }
}

export default Col2;