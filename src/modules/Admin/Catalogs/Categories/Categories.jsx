import { CategoriesService } from "@services/index";
import { TableComp } from "@components/index";
import { useEffect, useState } from "react";
import DialogComp from "@components/DialogComp";

export default function Categories() {
    const [states, setStates] = useState({ categories: [], open: false })
    const [data, setData] = useState({})

    const getCategoriesList = async () => {
        const response = await CategoriesService.getAll()
        setStates(prev => ({ ...prev, categories: response.data }))
    }

    const onChangeFunc = ({ target: { value, name } }) => setData(prev => ({
        ...prev,
        [name]: value
    }))

    const submit = async (newData = data) => {
        !newData.id && await CategoriesService.post(newData)
        newData.delete && await CategoriesService.drop(newData.id)
        newData.edit && await CategoriesService.edit(newData.id, newData)
        setData({})
        getCategoriesList()
        setStates(prev => ({ ...prev, open: false }))
    }

    useEffect(() => {
        getCategoriesList()
    }, [])

    return (<>
        <div className="flex w-full gap-5 justify-center">
            <TableComp
                data={states.categories}
                add={() => setStates({ ...states, open: true })}
                edit={(e) => {
                    setData(e)
                    setStates({ ...states, open: true })
                }}
                drop={(e) => submit(e)}
                columns={[
                    { header: 'Name', accessor: 'description' },
                    { header: 'Status', accessor: 'status' },
                ]}
            />
        </div>
        <DialogComp
            dialogProps={{
                model: 'categoria',
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
                    name: 'description',
                    value: data.description,
                    onChangeFunc: onChangeFunc
                },
            ]}
        />
    </>);
}



