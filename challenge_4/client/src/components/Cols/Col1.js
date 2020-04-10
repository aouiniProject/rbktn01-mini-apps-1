import React, { Component } from 'react';

class Col1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            1: "white",
            2: "white",
            3: "white",
            4: "white",
            5: "white",
            6: "white"
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
    on_click(row, col) {
        console.log(row, col)
        this.props.ON_CLICK(row, col)

    }

    render() {
        return (
            <div id="Col1" className="columns">
                <div className="elements" style={{ backgroundColor: this.state[1] }} id="1" onClick={this.on_click(0, 0, "1")}>.</div>
                <div className="elements" id="2" style={{ backgroundColor: this.state[2] }} onClick={this.on_click(1, 0, "2")}>.</div>
                <div className="elements" id="3" style={{ backgroundColor: this.state[3] }} onClick={this.on_click(2, 0, "3")}>.</div>
                <div className="elements" id="4" style={{ backgroundColor: this.state[4] }} onClick={this.on_click(3, 0, "4")}>.</div>
                <div className="elements" id="5" style={{ backgroundColor: this.state[5] }} onClick={this.on_click(4, 0, "5")}>.</div>
                <div className="elements" id="6" style={{ backgroundColor: this.state[6] }} onClick={this.on_click(5, 0, "6")}>.</div>

            </div>
        )
    }

}

export default Col1;