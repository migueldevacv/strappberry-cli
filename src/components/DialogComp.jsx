import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControlLabel, InputLabel, Step, StepLabel, Stepper } from "@mui/material";
import { useEffect } from "react";
import ButtonComp from "./ButtonComp";
import InputComp from "./InputComp";

export const dialogDefaultProps = {
    width: 'md',
    fullWidth: true,
    openState: false,
    fullScreen: false,
    openStateHandler: () => { return; },
    model: '',
    customTitle: false,
    actionState: 'create',
    style: 'grid grid-cols-1 gap-x-4',
    onSubmitState: () => { return; },
    customAction: null,
    _dialogPropsInfo: false,
    _dialogFieldsInfo: false
}

export default function DialogComp({ dialogProps = dialogDefaultProps, steps = [], fields = [], errors = {} }) {
    return (
        <>
            {dialogProps._dialogPropsInfo && console.log("_dialogPropsInfo", { dialogProps, steps, fields, errors, activeStep, stepperHandler })}
            {dialogProps._dialogFieldsInfo && console.log("_dialogFieldsInfo", { dialogProps, steps, fields, errors, activeStep, stepperHandler })}
            <Dialog open={dialogProps.openState ?? false} maxWidth={dialogProps.fullScreen ? false : dialogProps.width} fullWidth={dialogProps.fullScreen ? false : true} fullScreen={dialogProps.fullScreen} onClose={() => {
                if (dialogProps.enableOnClose === false)
                    return
                dialogProps.openStateHandler()
            }} >
                <DialogTitle className="flex justify-between" style={{ backgroundColor: 'white' }}>
                    {
                        dialogProps.customTitle && (dialogProps.model)
                    }
                    {(!dialogProps.customTitle && dialogProps.actionState === "create") && `Crear ${dialogProps.model}`}
                    {(!dialogProps.customTitle && dialogProps.actionState === "edit") && `Editar ${dialogProps.model}`}
                    {(!dialogProps.customTitle && dialogProps.actionState === "show") && `Detalles de ${dialogProps.model}`}

                </DialogTitle>
                <div className='flex justify-center'>
                    <Divider className='w-[95%]' />
                </div>
                <DialogContent key={dialogProps.actionState} style={{ backgroundColor: 'white' }}>
                    <form className={dialogProps.style} autoComplete="off">
                        <FieldDrawer fields={fields} errors={errors}></FieldDrawer>
                    </form>
                </DialogContent>

                <DialogActions style={{ backgroundColor: 'white' }}>
                    {
                        !dialogProps.customAction && <CancelButton closeHandler={dialogProps.openStateHandler} />
                    }
                    {
                        (steps.length > 0) ? (
                            <>
                                {activeStep === 0 ? null : (
                                    <Button onClick={() => stepperHandler((prevActiveStep) => prevActiveStep - 1)}>Anterior</Button>
                                )}
                                {activeStep === steps.length - 1 ? null : (
                                    <Button onClick={() => stepperHandler((prevActiveStep) => prevActiveStep + 1)}>Siguiente</Button>
                                )}
                                {activeStep === steps.length - 1 ? (
                                    dialogProps.actionState !== 'show' ? (
                                        <Button
                                            color={dialogProps.actionState == "create" ? "success" : "warning"}
                                            onClick={dialogProps.onSubmitState}
                                        >
                                            {dialogProps.actionState == "create" ? "Crear" : "Actualizar"}
                                        </Button>
                                    ) : null
                                ) : null}
                            </>
                        ) : dialogProps.customAction ? (<dialogProps.customAction {...dialogProps} />) : (
                            <>
                                {
                                    ((dialogProps.actionState !== 'show') && (dialogProps.actionState !== 'custom')) ? (
                                        <Button
                                            color={dialogProps.actionState == "create" ? "success" : "warning"}
                                            onClick={dialogProps.onSubmitState}
                                        >
                                            {dialogProps.actionState == "create" ? "Crear" : "Actualizar"}
                                        </Button>
                                    ) : dialogProps.customAction && <dialogProps.customAction />
                                }
                            </>
                        )

                    }
                </DialogActions>
            </Dialog>
        </>
    )
}

export const CancelButton = ({ closeHandler }) => {
    return (
        <Button color="error" onClick={() => { closeHandler() }} > Cancelar </Button>
    )
}

export const FieldDrawer = ({ fields = [], errors = [] }) => {
    return (

        fields && fields.map((field, key) => {
            if (field._fieldInfo)
                console.log("field info", field)
            if (field._conditional) {
                if (!field._conditional(field))
                    return <div key={key} className={`grid max-[640px]:col-span-full grid-cols-1 gap-1 ${field.style}`}></div>
            }
            if (field._debug) {
                field._debug({ field })
            }
            if (field.input) {
                return (
                    <div key={key} className={`grid max-[640px]:col-span-full grid-cols-1 gap-1 ${field.style}`}>
                        <InputComp
                            label={field.label}
                            className={"block w-full mt-1 texts"}
                            maxLength={field.maxLength}
                            name={field.name}
                            type={field.type}
                            value={field.value}
                            onChange={field.onChangeFunc}
                            disabled={field.disabled}
                            customIcon={field.customIcon}
                            max={field.max}
                            min={field.min}
                            ref={field.ref}
                            overwrite={field.overwrite}
                            autoComplete={field.autoComplete}
                            onlyUppercase={field.onlyUppercase}
                            allowAsci={field.allowAsci}
                        />

                        {errors[field.fieldKey] && (
                            <span className="text-red-600">
                                {errors[field.fieldKey]}
                            </span>
                        )}
                    </div>

                )
            }
            // if (field.select) {
            //     return (
            //         <div key={key} className={`grid max-[640px]:col-span-full grid-cols-1 gap-1 ${field.style}`}>
            //             <SelectComp
            //                 label={field.label}
            //                 value={field.value}
            //                 onChangeFunc={field.onChangeFunc}
            //                 options={field.options}
            //                 data={field.data}
            //                 valueKey={field.valueKey}
            //                 disabled={field.disabled}
            //                 virtual={field.virtual}
            //                 firstOption={field.firstOption}
            //                 firstLabel={field.firstLabel}
            //                 small={field.small}
            //                 ref={field.ref}
            //             />
            //             {errors[field.fieldKey] && (
            //                 <span className="text-red-600">
            //                     {errors[field.fieldKey]}
            //                 </span>
            //             )}
            //         </div>
            //     )
            // }
            if (field.custom) {
                return (
                    <div key={key} className={`grid max-[640px]:col-span-full grid-cols-1 gap-1 ${field.style}`}>
                        {
                            field.customItem && field.customItem({ ...field })
                        }
                    </div>
                )
            }
            if (field.check) {
                return (
                    <div key={key} className={`max-[640px]:col-span-full flex gap-1 mt-2  ${field.style}`}>
                        <FormControlLabel
                            label={field.label}
                            labelPlacement={field.labelPlacement || 'end'}
                            defaultChecked={true}
                            disabled={field.disabled}
                            control={
                                <Checkbox
                                    sx={{
                                        "& .MuiSvgIcon-root": {
                                            fontSize: 30,
                                        },
                                    }}
                                    checked={(field.checked == "1" || field.checked === true) ? true : false}
                                    onChange={field.onChangeFunc}
                                />
                            }
                        />
                    </div>
                )
            }
            if (field.blankSpace) {
                return (
                    <div key={key} className={`max-[640px]:col-span-full flex gap-1 mt-2 ${field.style}`} />
                )
            }
            if (field.button) {
                return (
                    <div key={key} className={`max-[640px]:col-span-full flex gap-1  ${field.style}`}>
                        <ButtonComp {...field} />
                    </div>
                )
            }
            if (field.childs) {
                return (
                    <div key={key} style={field.styleObj} className={`max-[640px]:col-span-full flex gap-1 mt-2  ${field.style}`}>
                        <FieldDrawer fields={field.childs} />
                    </div>
                )
            }
        })
    )
}
