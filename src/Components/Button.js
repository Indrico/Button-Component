const Button = (props) => {
    let style;

    style = {
        backgroundColor: props.backgroundColor,
    }

    return (
        <div className="button-container">
            <p>{props.name}</p>
            <button className={props.variant} style={style}>Default</button>
        </div>
    )
}

export default Button;