import React, { useState, useEffect } from 'react';
import TopMenuAdmin from "../components/TopMenuAdmin";
import SideMenuAdmin from "../components/SideMenuAdmin";
import HotelsTable from "../components/tablesAdmin/HotelsTable"; // Importa otros componentes de tabla específicos según sea necesario

const AdminPage: React.FC = () => {
    const [selectedTable, setSelectedTable] = useState<string>('Hotels');

    const renderTable = () => {
        switch (selectedTable) {
            case 'Hotels':
                return <HotelsTable />;
            case 'Floors':
                // return <FloorsTable />;
            // Añade más casos para otras tablas
            default:
                return null;
        }
    };

    return (
        <div className="w-full h-full bg-CGray">
            <TopMenuAdmin />
            
            <div className="flex w-full h-full justify-center items-start">
                <SideMenuAdmin onButtonClick={setSelectedTable} />
                <div className="flex justify-center items-start h-full w-[80vw]">
                    {renderTable()}
                </div>
            </div>
        </div>
    );
}

export default AdminPage;
