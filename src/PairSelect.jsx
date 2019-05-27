import React, { Component } from 'react';
import { Input } from 'reactstrap';

class PairSelect extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '', pairs: [] };
        this.toggle = this.toggle.bind(this);
        this.handlePairSelect = this.handlePairSelect.bind(this);
    }

    render() {
        return (
            <Input type="select" name="pair" value={this.state.value} onChange={this.handlePairSelect} >
                {
                    this.state.pairs.map(pair => <option key={pair}>{pair}</option>)
                }
            </Input>
        );
    }

    toggle() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }

    handlePairSelect(event) {
        this.setState({ value: event.target.value });
    }

    componentDidMount() {
        fetch('https://api.bitfinex.com/v1/symbols_details', {
            mode: 'no-cors', 
            // method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            }
        })
        // .then(response => response.json())
        // .then((data) => {
        //     const pairs = data.map(element => element.pair);
        //     this.setState({pairs})
        // })
    }
};


export default PairSelect;
