import React, { Component } from 'react';

class Col7 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            37: "white",
            38: "white",
            39: "white",
            40: "white",
            41: "white",
            42: "white"
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
            <div id="Col7" className="columns">
                <div className="elements" style={{ backgroundColor: this.state[37] }} id="37" onClick={this.on_click(0, 6, "37")}>.</div>
                <div className="elements" id="38" style={{ backgroundColor: this.state[38] }} onClick={this.on_click(1, 6, "38")}>.</div>
                <div className="elements" id="39" style={{ backgroundColor: this.state[39] }} onClick={this.on_click(2, 6, "39")}>.</div>
                <div className="elements" id="40" style={{ backgroundColor: this.state[40] }} onClick={this.on_click(3, 6, "40")}>.</div>
                <div className="elements" id="41" style={{ backgroundColor: this.state[41] }} onClick={this.on_click(4, 6, "41")}>.</div>
                <div className="elements" id="42" style={{ backgroundColor: this.state[42] }} onClick={this.on_click(5, 6, "42")}>.</div>


            </div>
        )
    }
}

export default Col7;
