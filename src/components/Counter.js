import React from 'react';

export default class Counter extends React.Component {
    

    render() {
        return (
            <div>
                <div>
                    count: {this.props.count}
                </div>
                <button onClick={this.props.increment}>Increment</button>
                <button onClick={this.props.decrement}>Decrement</button>
            </div>
        )
    }
}