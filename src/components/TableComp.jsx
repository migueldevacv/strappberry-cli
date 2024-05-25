import { DataTable } from "primereact/datatable"
import { useEffect, useState } from "react"
import { Column } from "primereact/column"
import ButtonComp from "./ButtonComp";
import InputComp from "./InputComp"
import _ from 'lodash';
import IconComp from "./IconComp";
import { Tooltip } from "@mui/material";

export function TableComp({ columns = [], data = [], add = () => { }, edit = null, drop = null }) {
    const [search, setSearch] = useState('')
    const [filterData, setFilterData] = useState([])

    useEffect(() => {
        if (search == '') setFilterData(data)
        else {
            const filteredResults = data
                .filter(reg => {
                    const rowValues = Object.values(reg).some(value => {
                        if (typeof value === 'string')
                            return value.toLowerCase().includes(search.toLowerCase());
                        return false;
                    });
                    return rowValues;
                })
            setFilterData(filteredResults)

        }
    }, [search, data])

    return (<div className="flex flex-col w-full gap-4">
        <div className="flex justify-between">
            <ButtonComp
                label='Agregar'
                className="!h-full !w-[30%]"
                onClick={() => add({ add: true })}
            />
            <InputComp
                label="Buscar"
                value={search}
                className=" !w-[30%]"
                onChange={({ target: { value } }) => setSearch(value)}
            />
        </div>
        <DataTable
            className="w-full"
            stripedRows
            value={filterData}
            paginator
            rows={10}
            dataKey="id"
            rowsPerPageOptions={[5, 10, 25, 50]}
            loading={false}
            emptyMessage="No data found."
        >
            {
                columns.map((col, i) => (<Column
                    key={i}
                    field={col.accessor}
                    header={col.header}
                    sortable
                    filterPlaceholder="Search by name"
                    style={{ minWidth: '12rem' }}
                    {...col}
                ></Column>))
            }
            {(edit || drop) && <Column
                header={'Acciones'}
                body={(e) => {
                    return (<div className="flex gap-2">
                        {edit && <Tooltip title='Editar'>
                            <button onClick={(event) => edit({ ...e, edit: true })} ><IconComp icon='edit' /></button>
                        </Tooltip>}
                        {drop && <Tooltip title='Eliminar'>
                            <button onClick={(event) => drop({ ...e, delete: true })} ><IconComp icon='delete' /></button>
                        </Tooltip>}
                    </div>)
                }}
            ></Column>}
        </DataTable>
    </div >)
}