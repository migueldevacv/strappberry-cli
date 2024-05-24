import { Button, Tooltip } from "@mui/material";

export default function ButtonComp({ color, disabled = false, onClick = () => { }, label = '', style = {}, className = '', tooltip = '' }) {
    return (
        <>
            {!disabled && <Tooltip title={tooltip}>
                <Button
                    variant="contained"
                    style={{
                        ...style,
                        backgroundColor: color ? color : (!disabled) ? '#1B2654' : '#7c7c7c',
                        color: 'white',
                        marginTop: '2vh',
                        height: '45px',
                        borderRadius: '12px',
                        width: '100%'
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