import React, { useState } from 'react';
import TopMenuAdmin from "../components/TopMenuAdmin";
import SideMenuAdmin from "../components/SideMenuAdmin";
import TableAdmin from "../components/TableAdmin";

// Ejemplo de datos simulados
const data = {
    Hoteles: [
        { 
            id: 1, 
            name: 'Continental Hotel Medellin', 
            location: 'Medellin' ,
            contact: "123456789",
            calification: 5,
            earnings: 1000,
            numberOfFloors: 20
        },
        { 
            id: 2, 
            name: 'Continental Hotel Bogota', 
            location: 'Bogota',
            contact: "123456789",
            calification: 4,
            earnings: 1000,
            numberOfFloors: 10
        
        },
    ],
    Pisos: [
        { 
            id: 1, 
            number: 1, 
            statusFloor: 'AVAILABLE',
            numberOfRooms: 10,

        
        },
        { 
            id: 2, 
            number: 2, 
            statusFloor: 'MAINTENANCE',
            numberOfRooms: 15,
         },
    ],
    // Agrega más datos simulados aquí según sea necesario
};

const AdminPage: React.FC = () => {
    const [currentTable, setCurrentTable] = useState<{ name: string, icon: string, data: any[] }>({ name: '', icon: '', data: [] });

    const handleButtonClick = (name: string, icon: string) => {
        // Simular la llamada a una API
        const fetchedData = data[name as keyof typeof data] || [];
        setCurrentTable({ name, icon, data: fetchedData });
    };

    return (
        <div className="w-full h-full bg-CGray">
            <TopMenuAdmin />
            <div className="flex w-full h-full justify-center items-start">
                <SideMenuAdmin onButtonClick={handleButtonClick} />
                <div className="flex justify-center items-start h-full">
                    
                    <TableAdmin nameTable={currentTable.name} iconTable={currentTable.icon} data={currentTable.data} />
                </div>
            </div>
        </div>
    );
}

export default AdminPage;
