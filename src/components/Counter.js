import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            show: true
        };
    }

    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }
    DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
    }
    ToggleClick = () => {
        this.setState({ show: !this.state.show });
    }



    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <div className={this.state.clicks === 0 ? "yellowCSS" : this.state.clicks > 0 ? "greenCSS" : "redCSS"}>
                    {this.state.show ? <h1>{this.state.clicks}</h1> : ''}
                </div>

                <div>
                    <button onClick={this.IncrementItem} type="button" className="btn btn-outline-success mx-3 my-3">Click to increment by 1</button>
                    <button onClick={this.DecreaseItem} type="button" className="btn btn-outline-danger mx-3 my-3">Click to decrease by 1</button>
                    <button onClick={this.ToggleClick} type="button" className="btn btn-outline-secondary mx-3 my-3">
                        {this.state.show ? 'Hide number' : 'Show number'}
                    </button>
                </div>

            </div>
        )
    }
}
