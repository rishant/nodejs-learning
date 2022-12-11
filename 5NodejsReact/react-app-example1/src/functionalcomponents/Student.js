
function Student(props) {
    const {name, email, color} = props;

    return (
        <div style={{"background-color": color }}>
            <h3>FC Name: {name} </h3>
            <h3>FC Email: {email} </h3>
        </div>
    );
}

export default Student;
// We can import this default export with any name but for best practices we have to use same name for better understanding.