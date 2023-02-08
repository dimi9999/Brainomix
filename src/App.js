import logo from "./logo.svg";
import "./App.css";
import React from "react";
import axios from "axios";
import './App.scss';
import Accordion from 'react-bootstrap/Accordion';

function App() {
  //State
  const [patientRecords, setPatientRecords] = React.useState([]);

  //On init - get data from API
  React.useEffect(() => {
    const getData = async () => {
      axios
        .request({
          method: "GET",
          url: "https://brainomix-web-media.s3-eu-west-1.amazonaws.com/recruitment/fe-challenge/fe_developer_test1.json",
        })
        .then((res) => {
          setPatientRecords(res.data.items);
        })
        .catch((e) => {
          console.error(e);
        });
    };
    getData();
  }, []);

  return (
    <div className="App">
      <div className="container">
      <Accordion>   

      {patientRecords?.map((r) => {
        return (
          
        <Accordion.Item>
        
        <Accordion.Header>
            <a href={r.url}>
            {/* Mandatory Properties */}
            <div>
              <div><strong>Patient ID:</strong> {r.patient_id || "Unknown"}</div>
              <div><strong>Patient Name:</strong> {r.patient_name || "Unknown"}</div>
              <div><strong>Patient DOB: </strong>{r.patient_dob || "Unknown"}</div>
              <div><strong>Timestamp:</strong> {r.timestamp || "Unknown"}</div>
              <div><strong>State: </strong>{r.state || "Unknown"}</div>
            </div>
            </a>
            </Accordion.Header>
            {/* Optional Properties */}
            <Accordion.Body> 
            <a href={r.url}>
            <div>
              <div><strong>Patient Gender:</strong> {r.patient_gender || "O"}</div>
              <div><strong>Study Description:</strong> {r.study_description || "Unknown"}</div>
              <div><strong>Series Description:</strong> {r.series_description || "Unknown"}</div>
              <div><strong>Slice Thickness: </strong> {r.slice_thickness || "Unknown"}</div>
              <div><strong>Scanner Manufacturer: </strong> {r.scanner_manufacturer}</div>
              <div><strong>Scanner Model:</strong> {r.scanner_model || "Unknown"}</div>
            </div>

            {/* Thumbnail */}
            <h2>Thumbnail</h2>
            <img src={r.thumbnail} />
            </a>
            </Accordion.Body>
          </Accordion.Item>
          
        );
      })}
      </Accordion>
    </div>
    </div>
  );
}

export default App;
