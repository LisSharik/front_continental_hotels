import React, { useState, useEffect } from "react";
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import BaseTable from "./BaseTable";
import { fetchData, createData, updateData, deleteData } from "../../data/DataApi";
import { API_URLS } from "../../data/ApiUrls";
import { ICONS } from "../../utils/Icons";
import ModalForm from "../../utils/ModalForm";

const HotelsTable: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingData, setEditingData] = useState<any | null>(null);
  const [formData, setFormData] = useState<any>({}); // Nuevo estado para el formulario

  useEffect(() => {
    loadData();
  }, [currentPage]);

  const tableColumns = [
    { key: "name", label: "Name", type: "text" },
    { key: "location", label: "Location", type: "text" },
    { key: "calification", label: "Rating", type: "text" },
    { key: "contact", label: "Contact", type: "text" },
    { key: "earnings", label: "Earnings", type: "text" },
    { key: "numberOfFloors", label: "Number Floors", type: "text" }
  ];

  const modalColumns = [
    { key: "name", label: "Name", type: "text" },
    { key: "location", label: "Location", type: "text" },
    { key: "calification", label: "Rating", type: "text" },
    { key: "contact", label: "Contact", type: "text" },
    { key: "numberOfFloors", label: "Number Floors", type: "text" }
  ];

  const handleSave = async (formData: any) => {
    try {
      if (editingData) {
        await updateData(`${API_URLS.HOTELS}/${editingData.id}`, formData);
      } else {
        await createData(API_URLS.HOTELS, formData);
      }
      setModalVisible(false);
      setEditingData(null);
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
      await deleteData(`${API_URLS.HOTELS}/${id}`);
      setData(prevData => prevData.filter(item => item.id !== id));
    } catch (error) {
      console.error("Failed to delete data:", error);
    }
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const result = await fetchData(API_URLS.HOTELS, currentPage, 7);
      setData(result.content);
      setTotalPages(result.totalPages);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
    setLoading(false);
  };

  return (
    <div className="w-5/6 h-full flex flex-col items-center pt-8 max-md:w-[90vw]">
      <div className="w-full h-20 bg-CWhite flex justify-between items-center mb-4 px-6 rounded-lg shadow-md max-md:h-16 max-md:px-4">
        <div className="flex justify-start items-center gap-2 title">
          <i className={`bx ${ICONS.Hotels} icon-table`}></i>
          <h2 className="text-subtitulos font-Lato font-bold max-md:text-baseSecundary">Hotels</h2>
        </div>
        <Button className="bg-[#1c9738] text-CWhite btn-add flex gap-1" onPress={() => { setEditingData(null); setModalVisible(true); }}>
          <i className='bx bxs-plus-circle'></i>
          New Hotel
        </Button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full">
          <div className="overflow-x-auto w-full">
            <BaseTable 
              data={data} 
              columns={tableColumns} 
              renderActions={(item: any) => (
                <div className="flex gap-2">
                  <Button color="primary" onPress={() => handleEdit(item)}>
                    <i className='bx bxs-edit-alt'></i>
                  </Button>
                  <Button color="danger" onPress={() => handleDelete(item.id)}>
                    <i className='bx bxs-trash'></i>
                  </Button>
                </div>
              )}
            />
          </div>
          <div className="flex justify-center items-center my-4">
            <Button className='hover:cursor-pointer' color='primary' disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Previous</Button>
            <span className="mx-4">Page {currentPage} of {totalPages}</span>
            <Button color='primary' disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
          </div>
        </div>
      )}
      <Modal 
        isOpen={modalVisible} 
        placement="center"
        onOpenChange={setModalVisible} 
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">{editingData ? "Edit Hotel" : "New Hotel"}</ModalHeader>
          <ModalBody>
            <ModalForm
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
              onSave={handleSave}
              columns={modalColumns} 
              initialData={editingData}
              setFormData={setFormData} // Pasamos la función para actualizar el estado del formulario
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={() => setModalVisible(false)}>
              Close
            </Button>
            <Button color="primary" onPress={() => handleSave(formData)}> {/* Pasamos formData a handleSave */}
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default HotelsTable;
