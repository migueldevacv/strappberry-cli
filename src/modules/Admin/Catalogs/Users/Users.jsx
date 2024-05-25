import { UsersService } from "@services/index";
import { TableComp } from "@components/index";
import { useEffect, useState } from "react";
import DialogComp from "@components/DialogComp";

export default function Users() {
    const [states, setStates] = useState({ users: [], open: false })
    const [data, setData] = useState({})

    const getUsersList = async () => {
        const response = await UsersService.getAllUsers()
        setStates(prev => ({ ...prev, users: response.data }))
    }

    const onChangeFunc = ({ target: { value, name } }) => setData(prev => ({
        ...prev,
        [name]: value
    }))

    const submit = async (newData = data) => {
        !newData.id && await UsersService.post(newData)
        newData.delete && await UsersService.drop(newData.id)
        newData.edit && await UsersService.edit(newData.id, newData)
        setData({})
        getUsersList()
        setStates(prev => ({ ...prev, open: false }))
    }

    useEffect(() => {
        getUsersList()
    }, [])

    return (<>
        <div className="flex w-full gap-5 justify-center">
            <TableComp
                data={states.users}
                edit={(e) => {
                    setData(e)
                    setStates({ ...states, open: true })
                }}
                drop={(e) => submit(e)}
                add={() => setStates({ ...states, open: true })}
                columns={[
                    { header: 'Name', accessor: 'name' },
                    { header: 'Email', accessor: 'email' },
                    { header: 'Status', accessor: 'status' },
                    { header: 'Role', accessor: 'role_id' },
                ]}
            />

            <DialogComp
                dialogProps={{
                    model: 'usuario',
                    width: 'sm',
                    openState: states.open,
                    actionState: data.id ? 'edit' : 'create',
                    style: 'gap-5',
                    openStateHandler: (e) => {
                        setStates({ ...states, open: false })
                        setData({})
                    },
                    onSubmitState: () => submit()
                }}
                fields={[
                    {
                        input: true,
                        label: 'Nombre',
                        name: 'name',
                        value: data.name,
                        onChangeFunc: onChangeFunc
                    },
                    {
                        input: true,
                        label: 'Email',
                        name: 'email',
                        value: data.email,
                        onChangeFunc: onChangeFunc
                    },
                    {
                        input: true,
                        label: 'Role',
                        name: 'role_id',
                        value: data.role_id,
                        onChangeFunc: onChangeFunc
                    },
                    {
                        input: true,
                        label: 'Password',
                        name: 'password',
                        type: 'password',
                        value: data.password,
                        onChangeFunc: onChangeFunc
                    },
                ]}
            />
        </div>
    </>);
}