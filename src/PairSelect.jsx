import React, { Component } from 'react';
import { Input, FormFeedback, Spinner } from 'reactstrap';
import { connect } from 'react-redux'
import { selectPair } from './store/actionCretors';
class PairSelect extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '', pairs: [], isValid: true, isLoading: true };
        this.toggle = this.toggle.bind(this);
    }

    render() {
        let select = (
            <>
                <Input invalid={!this.state.isValid}
                    disabled={!this.state.isValid}
                    type="select"
                    name="pair"
                    value={this.props.pair}
                    onChange={(e) => this.props.selectPair(e.target.value)}>
                    {
                        this.state.pairs.map(pair => <option key={pair}>{pair}</option>)
                    }
                </Input>
                <FormFeedback valid={this.state.isValid}>Oops! Something went wrong :(</FormFeedback>
            </>);

        let spinner = <Spinner color="light" />;

        return (
            this.state.isLoading ? spinner : select
        );
    }

    toggle() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }

    componentDidMount() {
        fetch('https://api.bitfinex.com/v1/symbols_details')
            .then(response => response.json())
            .then((data) => {
                const pairs = data.map(element => element.pair);
                this.props.selectPair(pairs[0]);
                this.setState({ pairs, isLoading: false });
            })
            .catch(() => {
                this.setState({ isValid: false, isLoading: false })
            });
    }
}

const mapStateToProps = (state) => {
    return {
        pair: state.pair
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectPair: (pair) => dispatch(selectPair(pair))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PairSelect);
