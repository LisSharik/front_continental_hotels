import React, { useState, useEffect } from 'react';
import TopMenuAdmin from "../components/TopMenuAdmin";
import SideMenuAdmin from "../components/SideMenuAdmin";
import HotelsTable from "../components/tablesAdmin/HotelsTable"; 
import FloorTable from '../components/tablesAdmin/FloorTable';

const AdminPage: React.FC = () => {
    const [selectedTable, setSelectedTable] = useState<string>('Hotels');

    const renderTable = () => {
        switch (selectedTable) {
            case 'Hotels':
                return <HotelsTable />;

                case 'Floors':
                    return <FloorTable/>
  
            default:
                return null;
        }
    };

    return (
        <div className="w-screen h-auto bg-CGray ">
            <TopMenuAdmin />
            
            <div className="flex w-full h-screen justify-start items-start max-md:flex-col max-md:h-auto ">
                <SideMenuAdmin onButtonClick={setSelectedTable} />
                <div className="flex justify-center items-start h-full w-[80vw] max-md:w-full ">
                    {renderTable()}
                </div>
            </div>
        </div>
    );
}

export default AdminPage;
