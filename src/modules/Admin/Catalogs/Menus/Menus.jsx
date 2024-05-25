import { MenusService } from "@services/index";
import { TableComp } from "@components/index";
import { useEffect, useState } from "react";
import DialogComp from "@components/DialogComp";

export default function Menus() {
    const [states, setStates] = useState({ menus: [], open: false })
    const [data, setData] = useState({})

    const getMenusList = async () => {
        const response = await MenusService.getAllMenus()
        setStates(prev => ({ ...prev, menus: response.data }))
    }

    const onChangeFunc = ({ target: { value, name } }) => setData(prev => ({
        ...prev,
        [name]: value
    }))

    const submit = async (newData) => {
        !newData.id && await MenusService.post(newData)
        newData.delete && await MenusService.drop(newData.id)
        newData.edit && await MenusService.edit(newData.id, newData)
        setData({})
        getMenusList()
        setStates(prev => ({ ...prev, open: false }))
    }
    useEffect(() => {
        getMenusList()
    }, [])
    return (<>
        <div className="flex w-full gap-5 justify-center">
            <TableComp
                data={states.menus}
                add={() => setStates({ ...states, open: true })}
                edit={(e) => {
                    setData(e)
                    setStates({ ...states, open: true })
                }}
                drop={(e) => submit(e)}
                columns={[
                    { header: 'Name', accessor: 'title' },
                    { header: 'Icon', accessor: 'icon' },
                    { header: 'Url', accessor: 'url' },
                    { header: 'Status', accessor: 'status' },
                ]}
            />
        </div>
        <DialogComp
            dialogProps={{
                model: 'menu',
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
                    name: 'title',
                    value: data.title,
                    onChangeFunc: onChangeFunc
                },
                {
                    input: true,
                    label: 'Icono',
                    name: 'icon',
                    value: data.icon,
                    onChangeFunc: onChangeFunc
                },
                {
                    input: true,
                    label: 'Url',
                    name: 'url',
                    value: data.url,
                    onChangeFunc: onChangeFunc
                },
            ]}
        />
    </>);
}