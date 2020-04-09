import React, { Component } from 'react';

class Board extends Component {
    constructor(props) {
        super(props);
        this.turn = 'blue'
        this.turnCount = 0;
        this.colors = {
            "1": "white",
            "2": "white",
            "3": "white",
            "4": "white",
            "5": "white",
            "6": "white",
            "7": "white",
            "8": "white",
            "9": "white",
            "10": "white",
            "11": "white",
            "12": "white",
            "13": "white",
            "14": "white",
            "15": "white",
            "16": "white",
            "17": "white",
            "18": "white",
            "19": "white",
            "20": "white",
            "21": "white",
            "22": "white",
            "23": "white",
            "24": "white",
            "25": "white",
            "26": "white",
            "27": "white",
            "28": "white",
            "29": "white",
            "30": "white",
            "31": "white",
            "32": "white",
            "33": "white",
            "34": "white",
            "35": "white",
            "36": "white",
            "37": "white",
            "38": "white",
            "39": "white",
            "40": "white",
            "41": "white",
        }
        this.board = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ];

        this.colChoice = this.colChoice.bind(this);
        this.minorCount = this.minorCount.bind(this);
        this.majorCount = this.majorCount.bind(this);
        this.verticalCount = this.verticalCount.bind(this);
        this.horizontalCount = this.horizontalCount.bind(this);
        this.on_click = this.on_click.bind(this);
        this.reset = this.reset.bind(this);
    }

    colChoice(col, id) {
        let table = this.board;

        for (let i = table.length - 1; i > -1; i--) {
            const row = table[i];
            const element = row[col];

            if (!element) {
                this.board[i][col] = this.turn;

                this.colors = this.turn

                if (this.turn === 'blue') {
                    this.turn = 'red'
                } else {
                    this.turn = 'blue'
                }

                return true;
            }

        }
        return false;
    }

    verticalCount(col) {
        let count = 0;
        let table = this.board;

        for (let row in table) {
            let element = row[col]

            if (element === 'blue') count++
            else if (element === 'red') count += 30
        }


        return count === 3 ? true : count === 30 ? true : false
    }

    minorCount(row, col) {
        let table = this.board;
        let count = 0;

        for (let i = row; i < table.length; i++) {
            const element = table[i][col++];

            if (element === 'blue') count++
            else if (element === 'red') count += 30


        }


        if (col - 1 > 0 && row - 1 > 0) {
            for (let i = row - 1; i > -1; i--) {
                const element = table[i][col--];

                if (element === 'blue') count++
                else if (element === 'red') count += 30


            }

        }

        return count === 3 ? true : count === 30 ? true : false
    }

    horizontalCount(row) {
        let count = 0;
        let table = this.board;

        for (let element in table[row]) {

            if (element === 'blue') count++
            else if (element === 'red') count += 30
        }

        return count === 3 ? true : count === 30 ? true : false
    }

    majorCount(row, col) {
        let table = this.board;
        let count = 0;

        if (row - 1 > -1 && col - 1 > -1) {
            let COL = col;

            for (let i = row; i > -1; i--) {
                const element = table[i][COL--];

                if (element === 'blue') count++
                else if (element === 'red') count += 30

            }
        }

        if (row + 1 < table.length && col + 1 < table[0].length) {
            let COL = col;

            for (let i = row + 1; i < table.length; i++) {
                const element = table[i][COL++];

                if (element === 'blue') count++
                else if (element === 'red') count += 30

            }
        }

        return count === 3 ? true : count === 30 ? true : false
    }

    reset() {
        this.board = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ]

        for (let i = 1; i < 43; i++) {

            this.colors[i + ""] = 'white'

        }
        console.log('reset')

    }

    on_click(row, col, id) {
        console.log(row, col, id)
        let check = this.colChoice(col, id);
        if ((check && this.verticalCount(col) +
            this.horizontalCount(row) +
            this.majorCount(row, col) +
            this.minorCount(row, col) > 0) ||
            (this.turnCount === this.board.length * this.board[0].length)) {

            this.reset();
        }
    }

    render() {
        return (
            <div id="board">
                <div className="elements" style={{ backgroundColor: this.colors['1'] }} id="1" onClick={this.on_click(0, 0, "1")}>.</div><div className="elements" id="2" style={{ backgroundColor: this.colors['2'] }} onClick={this.on_click(0, 1, "2")}>.</div><div className="elements" id="3" style={{ backgroundColor: this.colors['3'] }} onClick={this.on_click(0, 2, "3")}>.</div><div className="elements" id="4" style={{ backgroundColor: this.colors['4'] }} onClick={this.on_click(0, 3, "4")}>.</div><div className="elements" id="5" style={{ backgroundColor: this.colors['5'] }} onClick={this.on_click(0, 4, "5")}>.</div><div className="elements" id="6" style={{ backgroundColor: this.colors['6'] }} onClick={this.on_click(0, 5, "6")}>.</div><div className="elements" id="7" style={{ backgroundColor: this.colors['7'] }} onClick={this.on_click(0, 6, "7")}>.</div>
                <div className="elements" style={{ backgroundColor: this.colors['8'] }} id="8" onClick={this.on_click(1, 0, "8")}>.</div><div className="elements" id="9" style={{ backgroundColor: this.colors['9'] }} onClick={this.on_click(1, 1, "9")}>.</div><div className="elements" id="10" style={{ backgroundColor: this.colors['10'] }} onClick={this.on_click(1, 2, "10")}>.</div><div className="elements" id="11" style={{ backgroundColor: this.colors['11'] }} onClick={this.on_click(1, 3, "11")}>.</div><div className="elements" id="12" style={{ backgroundColor: this.colors['12'] }} onClick={this.on_click(1, 4, "12")}>.</div><div className="elements" id="13" style={{ backgroundColor: this.colors['13'] }} onClick={this.on_click(1, 5, "13")}>.</div><div className="elements" id="14" style={{ backgroundColor: this.colors['14'] }} onClick={this.on_click(1, 6, "14")}>.</div>
                <div className="elements" style={{ backgroundColor: this.colors['15'] }} id="15" onClick={this.on_click(2, 0, "15")}>.</div><div className="elements" id="16" style={{ backgroundColor: this.colors['16'] }} onClick={this.on_click(2, 1, "16")}>.</div><div className="elements" id="17" style={{ backgroundColor: this.colors['17'] }} onClick={this.on_click(2, 2, '17')}>.</div><div className="elements" id="18" style={{ backgroundColor: this.colors['18'] }} onClick={this.on_click(2, 3, "18")}>.</div><div className="elements" id="19" style={{ backgroundColor: this.colors['19'] }} onClick={this.on_click(2, 4, "19")}>.</div><div className="elements" id="20" style={{ backgroundColor: this.colors['20'] }} onClick={this.on_click(2, 5, '20')}>.</div><div className="elements" id="21" style={{ backgroundColor: this.colors['21'] }} onClick={this.on_click(2, 6, '21')}>.</div>
                <div className="elements" style={{ backgroundColor: this.colors['22'] }} id="22" onClick={this.on_click(3, 0, "22")}>.</div><div className="elements" id="23" style={{ backgroundColor: this.colors['23'] }} onClick={this.on_click(3, 1, "23")}>.</div><div className="elements" id="24" style={{ backgroundColor: this.colors['24'] }} onClick={this.on_click(3, 2, "24")}>.</div><div className="elements" id="25" style={{ backgroundColor: this.colors['25'] }} onClick={this.on_click(3, 3, "25")}>.</div><div className="elements" id="26" style={{ backgroundColor: this.colors['26'] }} onClick={this.on_click(3, 4, "26")}>.</div><div className="elements" id="27" style={{ backgroundColor: this.colors['27'] }} onClick={this.on_click(3, 5, "27")}>.</div><div className="elements" id="28" style={{ backgroundColor: this.colors['28'] }} onClick={this.on_click(3, 6, "28")}>.</div>
                <div className="elements" style={{ backgroundColor: this.colors['29'] }} id="29" onClick={this.on_click(4, 0, "29")}>.</div><div className="elements" id="30" style={{ backgroundColor: this.colors['30'] }} onClick={this.on_click(4, 1, "30")}>.</div><div className="elements" id="31" style={{ backgroundColor: this.colors['23'] }} onClick={this.on_click(4, 2, "23")}>.</div><div className="elements" id="32" style={{ backgroundColor: this.colors['32'] }} onClick={this.on_click(4, 3, "32")}>.</div><div className="elements" id="33" style={{ backgroundColor: this.colors['33'] }} onClick={this.on_click(4, 4, "33")}>.</div><div className="elements" id="34" style={{ backgroundColor: this.colors['34'] }} onClick={this.on_click(4, 5, "34")}>.</div><div className="elements" id="35" style={{ backgroundColor: this.colors['35'] }} onClick={this.on_click(4, 6, "35")}>.</div>
                <div className="elements" style={{ backgroundColor: this.colors['36'] }} id="36" onClick={this.on_click(5, 0, "36")}>.</div><div className="elements" id="37" style={{ backgroundColor: this.colors['37'] }} onClick={this.on_click(5, 1, "37")}>.</div><div className="elements" id="38" style={{ backgroundColor: this.colors['23'] }} onClick={this.on_click(5, 2, "23")}>.</div><div className="elements" id="39" style={{ backgroundColor: this.colors['39'] }} onClick={this.on_click(5, 3, "39")}>.</div><div className="elements" id="40" style={{ backgroundColor: this.colors['40'] }} onClick={this.on_click(5, 4, "40")}>.</div><div className="elements" id="41" style={{ backgroundColor: this.colors['24'] }} onClick={this.on_click(5, 5, "24")}>.</div><div className="elements" id="42" style={{ backgroundColor: this.colors['42'] }} onClick={this.on_click(5, 6, "42")}>.</div>

            </div>
        )
    }
}

export default Board;