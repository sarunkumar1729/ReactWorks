import './sample.css'

function Sample(){
    const componentStyle = {
        backgroundColor:'yellow',
        color:"red"
    };
    return(
        <div style={componentStyle}>
            <h1>TECHOLAS</h1>
            <h2>welcome</h2>
        </div>
    )
}

export default Sample;