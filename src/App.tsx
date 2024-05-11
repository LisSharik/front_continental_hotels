import {RangeCalendar} from "@nextui-org/react";
import {today, getLocalTimeZone} from '@internationalized/date';
import logoGold from "./assets/img/logos/logo_dorado_texto.png"

export default function App() {
  return (
    <div className="bg-black w-full h-screen flex items-center justify-center">
       <img src={logoGold} alt="" />
    </div>
    
  );
}


