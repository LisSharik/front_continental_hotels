import React from "react";
import {Button} from "@nextui-org/react";
import {Input} from "@nextui-org/react";


interface TableAdminProps {
    nameTable: string;
    iconTable: string;
    data: any[];
}

const TableAdmin: React.FC<TableAdminProps> = ({ nameTable, iconTable, data }) => {
    const renderTableHeader = () => {
        if (data.length === 0) return null;
        return (
            <tr>
                {Object.keys(data[0]).map((key) => (
                    <th key={key} className="border px-4 py-2">{key}</th>
                ))}
            </tr>
        );
    };

    const renderTableData = () => {
        return data.map((item, index) => (
            <tr key={index}>
                {Object.values(item).map((value, i) => (
                    <td key={i} className="border px-4 py-2">{String(value)}</td>
                ))}
            </tr>
        ));
    };

    return (
        <div className="w-[80vw] h-full flex flex-col justify-start items-center p-4 table-admin">
            <div className="w-11/12 h-[10%] bg-CWhite flex justify-between items-center mb-16 px-[60px] rounded-lg shadow-md ">
                <div className="flex justify-start items-center  gap-2 title">
                    <i className={`bx ${iconTable} icon-table`}></i>
                    <h2 className="text-subtitulos font-Lato  font-bold">{nameTable}</h2>
                </div>
                <Button className="bg-[#1c9738] text-CWhite btn-add">
                    <i className='bx bxs-plus-circle  '></i>
                    Agregar  
                </Button>
            </div>

            <Input
                type="email"
                label="Email"
                placeholder="you@example.com"
                labelPlacement="outside"
                className="w"
                startContent={
                    <i className='bx bxs-filter-alt' ></i>
                }
            />
            {data.length > 0 ? (
                <table className="table-auto w-11/12 bg-CWhite rounded-lg shadow-md ">
                    <thead>
                        {renderTableHeader()}
                    </thead>
                    <tbody>
                        {renderTableData()}
                    </tbody>
                   
                </table>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
}

export default TableAdmin;
