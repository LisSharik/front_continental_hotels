import React, { useState, useEffect } from "react";
import { Button, Input } from "@nextui-org/react";
import { fetchData } from "../utils/DataApi";

interface TableAdminProps {
    nameTable: string;
    iconTable: string;
    apiUrl: string;
}

const TableAdmin: React.FC<TableAdminProps> = ({ nameTable, iconTable, apiUrl }) => {
    const [data, setData] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const result = await fetchData(apiUrl, page, 10);
                setData(result.content);
                setTotalPages(result.totalPages);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
            setLoading(false);
        };
        getData();
    }, [apiUrl, page]);

    const renderTableHeader = () => {
        if (data.length === 0) return null;
        const keys = Object.keys(data[0]);
        keys.push("Actions");
        return (
            <tr>
                {keys.map((key) => (
                    <th key={key} className="border px-4 py-2">{key}</th>
                ))}
            </tr>
        );
    };

    const renderTableData = () => {
        return data.map((item, index) => (
            <tr key={index}>
                {Object.entries(item).map(([key, value], i) => (
                    <td key={i} className="border px-4 py-2">
                        {typeof value === 'object' ? value.name || value.roomNum || value.floorNum || '' : String(value)}
                    </td>
                ))}
                <td className="border px-4 py-2">
                    <Button auto color="warning">Edit</Button>
                    <Button auto color="error">Delete</Button>
                </td>
            </tr>
        ));
    };

    return (
        <div className="w-[80vw] h-full flex flex-col justify-start items-center p-4 table-admin">
            <div className="w-11/12 h-[10%] bg-CWhite flex justify-between items-center mb-16 px-[60px] rounded-lg shadow-md">
                <div className="flex justify-start items-center gap-2 title">
                    <i className={`bx ${iconTable} icon-table`}></i>
                    <h2 className="text-subtitulos font-Lato font-bold">{nameTable}</h2>
                </div>
                <Button className="bg-[#1c9738] text-CWhite btn-add">
                    <i className='bx bxs-plus-circle'></i>
                    Agregar
                </Button>
            </div>

            <Input
                type="text"
                label="Filter"
                placeholder="Filter data"
                labelPlacement="outside"
                className="w-11/12"
                startContent={<i className='bx bxs-filter-alt'></i>}
            />

            {loading ? (
                <p>Loading...</p>
            ) : data.length > 0 ? (
                <table className="table-auto w-11/12 bg-CWhite rounded-lg shadow-md">
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
