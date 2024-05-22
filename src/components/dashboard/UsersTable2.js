import React from "react";

const UsersTable2 = () => {
  const splitDateTime = (datetime) => {
    const [datePart, timePart,shift] = datetime.split(" ", 3);
    return { datePart, timePart,shift };
  };
  const datetime = "26-03-2024 12:00 PM";
  const { datePart, timePart,shift } = splitDateTime(datetime);
  return (
    <>
      <div class="table-responsive mt-3">
        <table class="table table-striped">
          <thead className="table-dark table-change">
            <tr>
              <th scope="col">Parking Name</th>
              <th scope="col">Name</th>
              <th scope="col">Duration</th>
              <th scope="col">Slot</th>
              <th scope="col">Amount</th>
              <th scope="col">Created At</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                Pname: "Top Sun",
                name: "Tom",
                time: "2",
                slot: "A-5",
                amount: "500",
                created: "",
                status:"cancelled"
              },
              {
                Pname: "Top Sun",
                name: "Tom",
                time: "2",
                slot: "A-5",
                amount: "300",
                created: "26-03-2024 12:00 PM",
                status:"Placed"
              },
            ].map((item) => {
              return (
                <tr>
                  <td>{item.Pname}</td>
                  <td>{item.name}</td>
                  <td>{item.time} Hours</td>
                  <td>{item.slot}</td>
                  <td>&#8377; {item.amount}</td>
                  <td>
                    {" "}
                    <div>
                      <p className="m-0">{datePart}</p>
                      <span className="m-0">{timePart} {shift}</span>
                     
                    </div>
                  </td>
                  <td>
                    
                  <a href="#" className={(item?.status == 'Placed') ? 'badge badge-success' : ' badge badge-danger'}>{item.status}</a>
                    
                  </td>
                  
                </tr>
              );
            })}
            {/* <tr>
        <td scope="row">Om Parking</td>
        <td>Zen</td>
        <td>2 Hours</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td scope="row">Top Sun</td>
        <td colspan="2">Tom</td>
        <td>2 Hours</td>
      </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersTable2;
