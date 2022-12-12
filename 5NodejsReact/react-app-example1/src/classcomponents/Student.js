import React from "react";

class Student extends React.Component {
    constructor(props) {
        super();
        this.state = { 
            name: '',
            email: ''
        } 
    }

    render() { 
        const {name, email, color} = this.props;
        return (
            <div style={{backgroundColor: color }}>
                {/* <h3>Name: {this.props.name} </h3>
                <h3>Email: {this.props.email} </h3> */}
                <h3>CC Name: {name} </h3>
                <h3>CC Email: {email} </h3>
            </div>
        );
    }
}
 
export default Student;
// We can import this default export with any name but for best practices we have to use same name for better understanding.