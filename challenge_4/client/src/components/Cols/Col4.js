import React, { Component } from 'react'

class Col4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            19: "white",
            20: "white",
            21: "white",
            22: "white",
            23: "white",
            24: "white"
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
            <div id="Col4" className="columns">
                <div className="elements" style={{ backgroundColor: this.state[19] }} id="19" onClick={this.on_click(0, 3, "19")}>.</div>
                <div className="elements" id="20" style={{ backgroundColor: this.state[20] }} onClick={this.on_click(1, 3, "20")}>.</div>
                <div className="elements" id="21" style={{ backgroundColor: this.state[21] }} onClick={this.on_click(2, 3, "21")}>.</div>
                <div className="elements" id="22" style={{ backgroundColor: this.state[22] }} onClick={this.on_click(3, 3, "22")}>.</div>
                <div className="elements" id="23" style={{ backgroundColor: this.state[23] }} onClick={this.on_click(4, 3, "23")}>.</div>
                <div className="elements" id="24" style={{ backgroundColor: this.state[24] }} onClick={this.on_click(5, 3, "24")}>.</div>


            </div>

        )
    }
}

export default Col4;