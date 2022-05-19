import React, { Component } from "react";
import "./Card.css";
import Details from "./Details";

export default class CardDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pro: {},
        };
    }
    handleChange = (e) => {

        this.setState({ pro: e })

    }

    render() {

        return (

            <>
                <Details single={this.state.pro} />
                <div className="containerra">
                    {this.props.products.map((curr) => {
                        return (
                            <>
                                <div className="inside" key={curr.id}>
                                    <div className="itemsa">
                                        <img width={"60%"} src={curr.img} />
                                    </div>
                                    <div className="itemsa">
                                        <p>
                                            <span>Name:</span>
                                            {curr.title}
                                        </p>
                                    </div>
                                    <div className="itemsa">
                                        <p>
                                            <span>Category:</span>
                                            {curr.Category}
                                        </p>
                                    </div>
                                    <div className="itemsa">
                                        {" "}
                                        <p>
                                            <span>Price:</span>
                                            {curr.price}
                                        </p>
                                    </div>
                                    <div className="itemsa">
                                        {" "}
                                        <p></p>
                                    </div>
                                    <div className="itemsa">
                                        <button key={curr.id}
                                            onClick={() => this.handleChange(curr)}
                                        >
                                            Click Me
                                        </button>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </>
        );
    }
}