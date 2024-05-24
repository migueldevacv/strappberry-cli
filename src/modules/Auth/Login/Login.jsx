import ButtonComp from "@components/ButtonComp";
import InputComp from "@components/InputComp";
import { Auth } from "@core/index";
import { AuthService } from "@services/index";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const [data, setData] = useState({})

    const submit = async () => await AuthService.login(data)

    const onChangeInput = ({ target: { value, name } }) => setData(prev => ({
        ...prev,
        [name]: value
    }))

    return (<>
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
        <ButtonComp
            label='Ingresar'
            className="!w-[45%]"
            onClick={submit}
        />

        <div className="flex flex-col items-center h-full justify-end text-grey pt-20">
            <p>¿Aun no tienes cuenta?</p>
            <Link to={'/auth/register'} className="text-black"> Registrate</Link>
            <br />
            <div>Miguel Angel Castro Vaquera | mikeangel7879@gmail.com</div>
        </div>
    </>)
}