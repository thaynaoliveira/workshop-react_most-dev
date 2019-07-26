import React, { Component } from "react";
import { connect } from 'react-redux';
import { getProfessionalsList } from "../actions";

class MostDev extends Component {

    componentDidMount(){
        let { dispatch } = this.props;
        dispatch(getProfessionalsList());
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.professionalList);
    }

    render(){
        return (
            <div>
                <h2 className="main-title">Most Dev Professionals</h2>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        professionalList: state.professionalList
    };
}

export default connect(mapStateToProps)(MostDev);


