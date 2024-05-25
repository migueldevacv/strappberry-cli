import ButtonComp from "@components/ButtonComp";
import InputComp from "@components/InputComp";
import { AuthService } from "@services/index";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
    const [data, setData] = useState({})

    const submit = async () => await AuthService.register(data)

    const onChangeInput = ({ target: { value, name } }) => setData(prev => ({
        ...prev,
        [name]: value
    }))

    return (<>
        <InputComp
            name='name'
            label="Nombre"
            onChange={onChangeInput}
            className="!w-[70%]"
            value={data.name} />
        <InputComp
            name='email'
            label="Email"
            onChange={onChangeInput}
            className="!w-[70%]"
            value={data.email} />
        <InputComp
            className="!w-[70%]"
            name='password'
            label="Contraseña"
            type="password"
            onChange={onChangeInput}
            value={data.password} />
        <InputComp
            className="!w-[70%]"
            name='password_confirm'
            label="Confirmar contraseña"
            type="password"
            onChange={onChangeInput}
            value={data.password_confirm} />
        <ButtonComp
            label='Registrar'
            className="!w-[45%]"
            onClick={submit}
        />

        <div className="flex flex-col items-center h-full justify-end text-grey pt-8">
            <p>Ya tienes cuenta?</p>
            <Link to={'/auth/login'} className="text-black"> Inicia sesión</Link>
        </div>
    </>)
}
