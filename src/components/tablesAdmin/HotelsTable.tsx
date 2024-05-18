import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import BaseTable from "./BaseTable";
import { fetchData } from "../../utils/DataApi";

const HotelsTable: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const result = await fetchData("http://localhost:8080/api/v1/hotels", currentPage, 10);
                setData(result.content);
                setTotalPages(result.totalPages);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
            setLoading(false);
        };
        getData();
    }, [currentPage]);

    const columns = [
        { key: "name", label: "Name" },
        { key: "location", label: "Location" },
        { key: "calification", label: "Rating" },
        { key: "contact", label: "Contact"},
        { key: "earnings", label: "earnings"},
        { key: "numberOfFloors", label: "Number Floors"}
    ]; // Cambia según tus datos

    const handleEdit = (id: string) => {
        // lógica de edición
    };

    const handleDelete = (id: string) => {
        // lógica de eliminación
    };

    const renderActions = (item: any) => (
        <>
            <Button color="primary" onClick={() => handleEdit(item.id)}>
                <i className='bx bxs-edit-alt'></i>
            </Button>
            <Button color="danger" onClick={() => handleDelete(item.id)}>
                <i className='bx bxs-trash'></i>
            </Button>
        </>
    );

    return (
        <div className="w-[70vw] flex flex-col items-center ">
            <div className="w-full h-16 bg-CWhite flex justify-between items-center mb-16 px-[60px] rounded-lg shadow-md">
                <div className="flex justify-start items-center gap-2 title ">
                    <i className='bx bxs-buildings icon-table'></i>
                    <h2 className="text-subtitulos font-Lato font-bold">Salome este es mi cuaderno</h2>
                </div>
                <Button className="bg-[#1c9738] text-CWhite btn-add">
                    <i className='bx bxs-plus-circle'></i>
                    Agregar
                </Button>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <BaseTable 
                    data={data} 
                    columns={columns} 
                    onPageChange={setCurrentPage}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    renderActions={renderActions} // Pasa renderActions
                />
            )}
        </div>
    );
}

export default HotelsTable;
