import React, { Component } from 'react';

class TranslateOutput extends Component {
    render() {
        return (
            <h2 className="text-success">{this.props.output}</h2>
        );
    }
}

export default TranslateOutput;