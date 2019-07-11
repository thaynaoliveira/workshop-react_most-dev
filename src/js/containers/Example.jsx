import React, { Component } from "react";
import { connect } from 'react-redux';
import { funcGet } from "../actions";
import Select from '../components/Select';

class Example extends Component {
    componentDidMount(){
        let { dispatch } = this.props;
        // dispatch(funcGet());
    }

    testChange(e){
        e.preventDefault();
        console.log(e.target.value);
    }

    render(){
        return (
            <div>
                React Blank Project
                <Select
                    id="select-test"
                    label="Label test" 
                    options={[{value:"1", name:"Option 1"}, {value:"2", name:"Option 2"}]} 
                    onChange={(e) => this.testChange(e)} />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        test: state.test
    };
}

export default connect(mapStateToProps)(Example);