import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import BaseTable from "./BaseTable";
import { fetchData, createData, updateData, deleteData } from "../../data/DataApi";
import ModalForm from "../../utils/ModalForm";
import { API_URLS } from "../../data/ApiUrls";


const RoomsTable: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [modalVisible, setModalVisible] = useState(false);
    const [editingData, setEditingData] = useState<any | null>(null);
  
    useEffect(() => {
      loadData();
    }, [currentPage]);
  
    const tableColumns = [
      { key: "state", label: "State", type: "text" },
      { key: "roomNum", label: "Room Num", type: "text" },
      { key: "price", label: "Price", type: "number" },
      { key: "capicity", label: "Capicity", type: "number" },
      { key: "description", label: "Description", type: "text" },
     
    ];
  
    const modalColumns = [
        { key: "state", label: "State", type: "text" },
        { key: "roomNum", label: "Room Num", type: "text" },
        { key: "price", label: "Price", type: "number" },
        { key: "capicity", label: "Capicity", type: "number" },
        { key: "description", label: "Description", type: "text" },
    ];
  
    const handleSave = async (formData: any) => {
      try {
        if (editingData) {
          await updateData(`${API_URLS.ROOMS}/${editingData.id}`, formData);
        } else {
          await createData(API_URLS.ROOMS, formData);
        }
        setModalVisible(false);
        setEditingData(null);
        // Refresh data
        loadData();
      } catch (error) {
        console.error("Failed to save data:", error);
      }
    };
  
    const handleEdit = (item: any) => {
      setEditingData(item);
      setModalVisible(true);
    };
  
    const handleDelete = async (id: string) => {
      try {
        await deleteData(`${API_URLS.ROOMS}/${id}`);
        // Update local state
        setData(prevData => prevData.filter(item => item.id !== id));
      } catch (error) {
        console.error("Failed to delete data:", error);
      }
    };
  
    const loadData = async () => {
      setLoading(true);
      try {
        const result = await fetchData(API_URLS.ROOMS, currentPage, 7);
        setData(result.content);
        setTotalPages(result.totalPages);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
      setLoading(false);
    };
  
    return (
      <div className="w-[70vw] h-full flex flex-col items-center pt-8 max-md:w-[90vw] ">
        <div className="w-full h-20 bg-CWhite flex justify-between items-center mb-1 px-[60px] rounded-lg shadow-md max-md:h-16 max-md:px-[10px]">
          <div className="flex justify-start items-center gap-2 title">
            <i className='bx bxs-buildings icon-table'></i>
            <h2 className="text-subtitulos font-Lato font-bold max-md:text-baseSecundary">Rooms</h2>
          </div>
          <Button className="bg-[#1c9738] text-CWhite btn-add" onPress={() => setModalVisible(true)}>
            <i className='bx bxs-plus-circle'></i>
            New Room
          </Button>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="overflow-x-auto w-full">
            <BaseTable 
              data={data} 
              columns={tableColumns} 
              onPageChange={setCurrentPage}
              currentPage={currentPage}
              totalPages={totalPages}
              renderActions={(item: any) => (
                <>
                  <Button color="primary" onPress={() => handleEdit(item)}>
                    <i className='bx bxs-edit-alt'></i>
                  </Button>
                  <Button color="danger" onPress={() => handleDelete(item.id)}>
                    <i className='bx bxs-trash'></i>
                  </Button>
                </>
              )}
            />
          </div>
        )}
        <ModalForm
          visible={modalVisible}
          onClose={() => { setModalVisible(false); setEditingData(null); }}
          onSave={handleSave}
          columns={modalColumns} 
          initialData={editingData}
        />
      </div>
    );
}

export default RoomsTable;
