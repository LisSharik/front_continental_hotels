import React, { useState, useEffect } from "react";
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import BaseTable from "./BaseTable";
import { fetchData, createData, updateData, deleteData } from "../../data/DataApi";
import { API_URLS } from "../../data/ApiUrls";
import { ICONS } from "../../utils/Icons";
import ModalForm from "../../utils/ModalForm";

const FloorTable: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingData, setEditingData] = useState<any | null>(null);
  const [hotels, setHotels] = useState<any[]>([]);
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    loadData();
    loadHotels();
  }, [currentPage]);

  const tableColumns = [
    { key: "number", label: "Number" },
    { key: "numberOfRooms", label: "Number of Rooms" },
    { key: "statusFloor", label: "Status" },
    { key: "hotelId", label: "Hotel ID" }
  ];

  const modalColumns = [
    { key: "number", label: "Number", type: "number" },
    { key: "numberOfRooms", label: "Number of Rooms", type: "number" },
    {
      key: "hotelId", label: "Hotel", type: "select", options: hotels.map(hotel => ({
        value: hotel.id, label: hotel.name
      }))
    }
  ];

  const handleSave = async (formData: any) => {
    console.log("Form Data:", formData);
    try {
      if (editingData) {
        await updateData(`${API_URLS.FLOORS}/${editingData.id}`, formData);
      } else {
        await createData(API_URLS.FLOORS, formData);
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
      await deleteData(`${API_URLS.FLOORS}/${id}`);
      setData(prevData => prevData.filter(item => item.id !== id));
    } catch (error) {
      console.error("Failed to delete data:", error);
    }
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const result = await fetchData(API_URLS.FLOORS, currentPage, 7);
      setData(result.content);
      setTotalPages(result.totalPages);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
    setLoading(false);
  };

  const loadHotels = async () => {
    try {
      const result = await fetchData(API_URLS.HOTELS, 1, 50);
      setHotels(result.content);
    } catch (error) {
      console.error("Failed to fetch hotels:", error);
    }
  };

  return (
    <div className="w-5/6 h-full flex flex-col items-center pt-8 max-md:w-[90vw]">
      <div className="w-full h-20 bg-CWhite flex justify-between items-center mb-4 px-6 rounded-lg shadow-md max-md:h-16 max-md:px-4">
        <div className="flex justify-start items-center gap-2 title">
          <i className={`bx ${ICONS.Floors} icon-table`}></i>
          <h2 className="text-subtitulos font-Lato font-bold max-md:text-baseSecundary">Floors</h2>
        </div>
        <Button className="bg-[#1c9738] text-CWhite btn-add flex gap-1" onPress={() => { setEditingData(null); setModalVisible(true); }}>
          <i className='bx bxs-plus-circle'></i>
          New Floor
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
          <ModalHeader className="flex flex-col gap-1">{editingData ? "Edit Floor" : "New Floor"}</ModalHeader>
          <ModalBody>
            <ModalForm
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
              onSave={handleSave}
              columns={modalColumns}
              initialData={editingData}
              setFormData={setFormData}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={() => setModalVisible(false)}>
              Close
            </Button>
            <Button color="primary" onPress={() => handleSave(formData)}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default FloorTable;
