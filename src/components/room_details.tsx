import { Key, useRef } from "react";
import {roomImages} from "../data/roomImages.json";



function room_details() {
  //getInfo("/room");

  

  return (<>
      <div>
        <div>
          <button>Prev</button>
          <div> 
            <ul>
              {roomImages.map((room: { id: Key | null | undefined; url: string | undefined; }) => {
                <li key={room.id}>
                  <img src={room.url} alt="room" />
                </li>
              })}
            </ul>
          </div>
          <button>Next</button>
        </div>
      </div>
    </>
  );
}


export default room_details;


//function getInfo(endPoint: string){
//  const url = http://localhost:8080/api/v1/{endPoint};
//  
//  const response = wdawdawdawdM;
//
//
//  return response;
//}
