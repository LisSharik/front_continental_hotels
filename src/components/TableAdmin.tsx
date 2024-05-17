import React from "react";

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
        <div className="w-full h-full flex flex-col justify-start items-center p-4">
            <div className="w-full h-[10vh] bg-CWhite flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <i className={`bx ${iconTable} text-2xl`}></i>
                    <h2 className="text-2xl font-bold">{nameTable}</h2>
                </div>
            </div>
            {data.length > 0 ? (
                <table className="table-auto w-full">
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
