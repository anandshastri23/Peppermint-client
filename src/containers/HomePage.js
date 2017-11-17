import React, {Component} from "react";
import {connect} from "react-redux";

import {receivedResponseData} from "../redux/actions";

class HomePage extends Component {

    constructor() {
        super();
        this.state = {
            value:""
        };
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.submitData(this.state.value);
    }

    render() {
        return (
            <div>
                <h1> Welcome</h1>
                <div>
                    <form onSubmit={(event) => this.handleSubmit(event)}>
                        <button className="btn btn-lg btn-primary"> Send data to backend </button>
                        <br/>
                     </form>
                 </div>
             </div>
        );
    }

}

export const mapDispatchToProps = (dispatch) => {
    return {
        submitData(data) {
            dispatch(receivedResponseData(data))
        }
    };
}

export default connect(null, mapDispatchToProps) (HomePage);