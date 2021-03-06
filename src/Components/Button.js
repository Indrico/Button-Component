import Icon from './Icon'

const Button = (props) => {
    let customStyle, grid;

    customStyle = {
        backgroundColor: props.backgroundColor,
    }

    if (props.disableShadow === "true") {
        customStyle = {
            backgroundColor: "#3D5AFD",
            color: "#fff"
        }

        grid = {
            gridColumn: "1 / span 2"
        }
    }

    if (props.size) {
        let size = props.size;
        let padding;

        if (size === "sm") {
            padding = "5px 10px";
        } else if (size === "md") {
            padding = "10px 20px";
        } else if (size === "lg") {
            padding = "15px 30px";
        }

        customStyle = {
            backgroundColor: "#3D5AFD",
            color: "#fff",
            padding: padding
        }
    }

    return (
        <div className="button-container" style={grid}>
            <p>{props.name}</p>
            <button className={props.variant || props.color} style={customStyle} disabled={props.disabled}>
                {props.startIcon && <Icon iconName={props.iconName} margin="start"/>}
                {props.disabled ? "Disabled" : "Default"}
                {props.endIcon && <Icon iconName={props.iconName} margin="end"/>}
            </button>
        </div>
    )
}

export default Button;