import React, { Component } from 'react';
import { Input, FormFeedback, Spinner } from 'reactstrap';
import { connect } from 'react-redux'
import { selectPair } from './store/actionCretors';
import * as URLS from './url';
import withFormGroup from './hoc/withFormGroup';
import axios from 'axios';

export class PairSelect extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '', pairs: [], isValid: true, isLoading: true };
    }

    render() {
        let select = (
            <>
                <Input invalid={!this.state.isValid}
                    disabled={!this.state.isValid}
                    type="select"
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

    componentDidMount() {
        axios.get(URLS.SYMBOL_DETAILS)
            .then(({ data }) => {
                console.log('---------------->DUPA')
                const pairs = data.map(element => element.pair);
                this.props.selectPair(pairs[0]);
                this.setState({ pairs, isLoading: false });
            })
            .catch((err) => {
                this.setState({ isValid: false, isLoading: false })
            });
    }
}

const mapStateToProps = (state) => {
    return {
        pair: state.pair
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectPair: (pair) => dispatch(selectPair(pair))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withFormGroup(PairSelect, "Pair"));
