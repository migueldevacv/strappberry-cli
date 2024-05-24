import { Colors } from "@core/Colors";
import { Button, Tooltip } from "@mui/material";

export default function ButtonComp({ color, disabled = false, onClick = () => { }, label = '', style = {}, className = '', tooltip = '' }) {
    return (
        <>
            {!disabled && <Tooltip title={tooltip}>
                <Button
                    variant="contained"
                    style={{
                        ...style,
                        backgroundColor: color ? color : (!disabled) ? Colors.blue : '#7c7c7c',
                        color: 'white',
                        height: '35px',
                        borderRadius: '5px',
                        width: '100%',
                        boxShadow: 'transparent',
                        fontSize: '10px',
                    }}
                    className={className}
                    disabled={disabled}
                    onClick={onClick}

                >
                    {label}
                </Button>
            </Tooltip>}

            {disabled && <Button
                variant="contained"
                style={{
                    backgroundColor: '#7c7c7c',
                    fontSize: '10px',
                    color: 'white',
                    marginTop: '2vh',
                    height: '45px',
                    borderRadius: '12px',
                    width: '100%',
                    ...style,
                }}
                className={className}
                disabled={disabled}
                onClick={onClick}

            >
                {label}
            </Button>}
        </>
    )
}