import React,{useState} from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://warehouse-function.azurewebsites.net/api/user/list?code=Vy_PvT8ZP7UFOgZifjbhDxFn7OadO58WcT5msrD5AmhrAzFu-TXRfg%3D%3D", {
      method: "GET",
      headers: { 'accept': 'application/json'},
    });
    const jsonData = await response.json();
    console.log(jsonData);
    setData(jsonData);
  };

  return (
    <div>
      <button onClick={fetchData}style={{
        backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        padding: "16px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "10px",
        borderRadius: "5px",
        boxShadow: "2px 2px 2px #888888"
      }}>Fetch Shipping Information
      </button>
      <table style={{ border: "1px solid black", borderCollapse: "collapse" }}>
        <thead>
          <tr>
          <th style={{ border: "1px solid black", padding: "10px" }}>Date</th>
          <th style={{ border: "1px solid black", padding: "10px" }}>Warehouse ID</th>
          <th style={{ border: "1px solid black", padding: "10px" }}>Shipping PO</th>
          <th style={{ border: "1px solid black", padding: "10px" }}>Shipment ID</th>
          <th style={{ border: "1px solid black", padding: "10px" }}>Boxes Received</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.ShippingPO}>
              <td style={{ border: "1px solid black", padding: "10px" }}>{item.Date}</td>
              <td style={{ border: "1px solid black", padding: "10px" }}>{item.WarehouseID}</td>
              <td style={{ border: "1px solid black", padding: "10px" }}>{item.ShippingPO}</td>
              <td style={{ border: "1px solid black", padding: "10px" }}>{item.ShipmentID}</td>
              <td style={{ border: "1px solid black", padding: "10px" }}>{item.BoxesRcvd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

