import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Col1 from './Cols/Col1';
import Col2 from './Cols/Col2';
import Col3 from './Cols/Col3';
import Col4 from './Cols/Col4';
import Col5 from './Cols/Col5';
import Col6 from './Cols/Col6';
import Col7 from './Cols/Col7';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            turnCount: 0
        }
        this.turn = 'blue';

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
        this.checkBoard = this.checkBoard.bind(this);
        this.reset = this.reset.bind(this);
    }

    colChoice(col, id) {
        let table = this.board;
        let check = false;

        for (let i = table.length - 1; i > -1; i--) {
            const row = table[i];
            const element = row[col];

            if (!element) {
                this.board[i][col] = this.turn;
                check = true;
            }

        }
        if (check) {
            if (this.turn === 'blue') {
                // this.setState({ turn: 'red' })
                this.turn = 'red'
            } else {
                // this.setState({ turn: 'blue' })
                this.turn = 'blue'

            }

            return true;

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

        ReactDOM.render(
            <div id="cols">
                <Col1 />
                <Col2 />
                <Col3 />
                <Col4 />
                <Col5 />
                <Col6 />
                <Col7 />
            </div>,
            document.getElementById('board'))

        console.log('reset')

    }

    checkBoard(row, col, id) {
        console.log(row, col, id)
        let check = this.colChoice(col, id);
        if ((check && this.verticalCount(col) +
            this.horizontalCount(row) +
            this.majorCount(row, col) +
            this.minorCount(row, col) > 0) ||
            (this.state.turnCount === this.board.length * this.board[0].length)) {

            this.reset();
        }
    }



    render() {
        return (
            <div id="board">
                <div id="cols">
                    <Col1 ON_CLICK={this.checkBoard} />
                    <Col2 ON_CLICK={this.checkBoard} />
                    <Col3 ON_CLICK={this.checkBoard} />
                    <Col4 ON_CLICK={this.checkBoard} />
                    <Col5 ON_CLICK={this.checkBoard} />
                    <Col6 ON_CLICK={this.checkBoard} />
                    <Col7 ON_CLICK={this.checkBoard} />

                </div>

            </div>
        )
    }
}

export default Board;