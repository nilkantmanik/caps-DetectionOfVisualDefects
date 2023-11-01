import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

import { useSelector } from "react-redux";

function Patientlist() {
  let useremail = useSelector((state) => state.doctoremail);

  const [patientList, setPatientList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/user/patientlist",
          {
            useremail,
          }
        );
        setPatientList(response.data.patients); // Ensure to set patientList as response.data.patients
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching patient list:", error);
      }
    };
    fetchData();
  }, [useremail]);

  return (
    <>
      <Navbar />
    
      <div className="patlistpage" style={{ backgroundColor:"#6c99f5", height: "100vh" }}>
      <table style={{ width: "80%", border: "1px solid black", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "10px" }}>Name</th>
              <th style={{ border: "1px solid black", padding: "10px" }}>Email</th>
              <th style={{ border: "1px solid black", padding: "10px" }}>Prediction</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(patientList) &&
              patientList.map((patient, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid black", padding: "10px" }}>{patient.name}</td>
                  <td style={{ border: "1px solid black", padding: "10px" }}>{patient.email}</td>
                  <td style={{ border: "1px solid black", padding: "10px" }}>{patient.prediction}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Patientlist;
