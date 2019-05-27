import React, {Component} from 'react';
import {Input, FormFeedback, Spinner} from 'reactstrap';

class PairSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', pairs: [], isValid: true, isLoading: true};
        this.toggle = this.toggle.bind(this);
        this.handlePairSelect = this.handlePairSelect.bind(this);
    }

    render() {
        let select = (
            <>
                <Input invalid={!this.state.isValid}
                       disabled={!this.state.isValid}
                       type="select" name="pair"
                       value={this.state.value}
                       onChange={this.handlePairSelect}>
                    {
                        this.state.pairs.map(pair => <option key={pair}>{pair}</option>)
                    }
                </Input>
                <FormFeedback valid={this.state.isValid}>Oops! Something went wrong :(</FormFeedback>
            </>);

        let spinner = <Spinner color="light"/>;

        return (
            this.state.isLoading ? spinner : select
        );
    }

    toggle() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }

    handlePairSelect(event) {
        this.setState({value: event.target.value});
    }

    componentDidMount() {
        fetch('https://api.bitfinex.com/v1/symbols_details')
            .then(response => response.json())
            .then((data) => {
                const pairs = data.map(element => element.pair);
                this.setState({pairs, isLoading: false})
            })
            .catch(() => {
                this.setState({isValid: false, isLoading: false})
            });
    }
}


export default PairSelect;
