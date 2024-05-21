import React from 'react';
import { Button } from "@nextui-org/react";

interface BaseTableProps {
    data: any[];
    columns: { key: string, label: string }[];
    renderActions: (item: any) => JSX.Element;
}

const BaseTable: React.FC<BaseTableProps> = ({ data, columns, renderActions }) => {
    const renderTableHeader = () => {
        return (
            <tr>
                {columns.map((column) => (
                    <th key={column.key} className="text-start border px-4 py-2">{column.label}</th>
                ))}
                <th className="text-start border px-4 py-2">Actions</th>
            </tr>
        );
    };

    const renderTableData = () => {
        return data.map((item, index) => (
            <tr key={index}>
                {columns.map((column) => (
                    <td key={column.key} className="border px-4 py-2">
                        {item[column.key]}
                    </td>
                ))}
                <td className="border px-4 py-2 flex gap-2">
                    {renderActions(item)}
                </td>
            </tr>
        ));
    };

    return (
        <div className="overflow-x-auto w-full">
            <table className="table-auto w-full bg-CWhite rounded-lg shadow-md">
                <thead>
                    {renderTableHeader()}
                </thead>
                <tbody>
                    {renderTableData()}
                </tbody>
            </table>
        </div>
    );
}

export default BaseTable;
