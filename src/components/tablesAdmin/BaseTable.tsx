import React from 'react';

interface BaseTableProps {
    data: any[];
    columns: { key: string, label: string }[];
    onPageChange: (page: number) => void;
    currentPage: number;
    totalPages: number;
    renderActions: (item: any) => JSX.Element; // Agrega renderActions para pasar botones de acciones
}

const BaseTable: React.FC<BaseTableProps> = ({ data, columns, onPageChange, currentPage, totalPages, renderActions }) => {
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

    const renderPagination = () => {
        return (
            <div className="flex justify-center items-center my-4">
                <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>Previous</button>
                <span className="mx-4">Page {currentPage} of {totalPages}</span>
                <button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>Next</button>
            </div>
        );
    };

    return (
        <div className="w-full h-full flex flex-col justify-start items-center p-4 table-admin ">
            <table className="table-auto w-full bg-CWhite rounded-lg shadow-md">
                <thead className=''>
                    {renderTableHeader()}
                </thead>
                <tbody>
                    {renderTableData()}
                </tbody>
            </table>
            {renderPagination()}
        </div>
    );
}

export default BaseTable;
