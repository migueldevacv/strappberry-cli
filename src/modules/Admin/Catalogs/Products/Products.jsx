import { ProductService } from "@services/index";
import { TableComp } from "@components/index";
import { useEffect, useState } from "react";
import DialogComp from "@components/DialogComp";
import { Formatters } from "@core/index";

export default function Products() {
    const [states, setStates] = useState({ products: [], open: false })
    const [data, setData] = useState({})

    const getProductList = async () => {
        const response = await ProductService.getAllProducts()
        setStates(prev => ({ ...prev, products: response.data }))
    }

    const onChangeFunc = ({ target: { value, name } }) => setData(prev => ({
        ...prev,
        [name]: value
    }))

    const submit = async (newData = data) => {
        !newData.id && await ProductService.post(newData)
        newData.delete && await ProductService.drop(newData.id)
        newData.edit && await ProductService.edit(newData.id, newData)
        setData({})
        getProductList()
        setStates(prev => ({ ...prev, open: false }))
    }

    useEffect(() => {
        getProductList()
    }, [])

    return (<>
        <div className="flex w-full gap-5 justify-center">
            <TableComp
                data={states.products}
                add={() => setStates({ ...states, open: true })}
                edit={(e) => {
                    setData(e)
                    setStates({ ...states, open: true })
                }}
                drop={(e) => submit(e)}
                columns={[
                    { header: 'Name', accessor: 'name' },
                    { header: 'Description', accessor: 'description' },
                    { header: 'Price', accessor: 'price', dataType: 'numeric', body: ({ price }) => `$ ${Formatters.moneyFormat(price)}` },
                    { header: 'Status', accessor: 'status' },
                    { header: 'Category', accessor: 'category_id' },
                ]}
            />
            <DialogComp
                dialogProps={{
                    model: 'producto',
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
                        label: 'Description',
                        name: 'description',
                        value: data.description,
                        onChangeFunc: onChangeFunc
                    },
                    {
                        input: true,
                        label: 'Category',
                        name: 'category_id',
                        value: data.category_id,
                        onChangeFunc: onChangeFunc
                    },
                    {
                        input: true,
                        label: 'Price',
                        name: 'price',
                        value: data.price,
                        onChangeFunc: onChangeFunc
                    },
                ]}
            />
        </div>
    </>);
}