import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import {
    increment,
    incrementAsync,
    decrement,
    decrementAsync
} from '../../redux/modules/counter'

const Home = props => (
    <div>
      <h1>Home</h1>
      <TextField
        defaultValue="Default Value"
        floatingLabelText="Floating Label Text"
      />
      <p>Count: {props.count}</p>

      <p>
        <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
        <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
      </p>

      <p>
        <button onClick={props.decrement} disabled={props.isDecrementing}>Decrementing</button>
        <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
      </p>

      <p><button onClick={() => props.changePage()}>Go to faq via redux</button></p>
    </div>
)

const mapStateToProps = state => ({
    count: state.counter.count,
    isIncrementing: state.counter.isIncrementing,
    isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
    increment,
    incrementAsync,
    decrement,
    decrementAsync,
    changePage: () => push('/faq')
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
