import Papa from "papaparse";
import React, { useState } from "react";
import UserDataService from "../services/UserDataService";

const AddUser = () => {
  const [isParsedData, setIsParsedData] = useState(false);

  // useEffect(() => {
  //   console.log(parsedData[1]);
  // }, [parsedData]);

  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setIsParsedData(true);

        UserDataService.createMore({ users: results.data })
          .then((response) => {
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      },
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* File Uploader */}
      <input
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        style={{ display: "block", margin: "10px auto" }}
      />
      <br />
      <br />
      {isParsedData ? (
        <div>
          <h4>Data parsed successfully!</h4>
        </div>
      ) : (
        <div>
          <h4>Upload the CSV to parse data!</h4>
        </div>
      )}
    </div>
  );
};

export default AddUser;
