import React, { useState, useEffect } from "react";
import BaseTable from "./BaseTable";
import { fetchData, createData, updateData, deleteData } from "../../utils/DataApi";
import { API_URLS } from "../../data/ApiUrls";

const RoomsTable: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const result = await fetchData(API_URLS.ROOMS, 1, 10);
                setData(result.content);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
            setLoading(false);
        };
        getData();
    }, []);

    const handleEdit = (id: number) => {
        console.log("Edit room with id:", id);
    };

    const handleDelete = (id: number) => {
        console.log("Delete room with id:", id);
    };

    return (
        <div>
            <h2>Rooms</h2>
            {loading ? <p>Loading...</p> : <BaseTable data={data} headers={["id", "roomNum", "type"]} onEdit={handleEdit} onDelete={handleDelete} />}
        </div>
    );
}

export default RoomsTable;
