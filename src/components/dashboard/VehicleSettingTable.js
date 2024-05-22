import React from 'react'
import editicon from "../../images/editicon.png"
const VehicleSettingTable = () => {
    return (
        <>
          <div class="table-responsive mt-3">
             <table class="table table-striped">
               <thead className="table-dark table-change">
                 <tr>
                   <th scope="col">Car Number</th>
                   <th scope="col">Brand</th>
                   <th scope="col">Model</th>
                   <th scope="col">Actions</th>
                 
                 </tr>
               </thead>
               <tbody>
                 {[
                   {
                     carno: "KA01AS0987",
                     brand:"Chevrolet",
                     model:"cruze"
                   },
                   {
                     carno: "KA01AS0987",
                     brand:"Chevrolet",
                     model:"cruze"
                   },
                 ].map((item) => {
                   return (
                     <tr>
                       <td>{item.carno}</td>
                     
                       <td>{item.brand}</td>
                       <td>{item.model}</td>
                       <td><img src = {editicon}></img></td>
                     
                      
                       
                     </tr>
                   );
                 })}
                 
            
               </tbody>
             </table>
           </div>
        </>
       )
}

export default VehicleSettingTable;