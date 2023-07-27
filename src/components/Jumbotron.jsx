import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Jumbotron({ ayat }) {
  const [ayt, setAyt] = useState([]);
  const id = ayat - 1;
  const url = "https://api.npoint.io/99c279bb173a6e28359c/data/" + id;

  const getAyat = async () => {
    try {
      const response = await axios.get(url);
      setAyt(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAyat();
  }, []);

  console.log(ayt);

  return (
    <div>
      <div className="container">
        <div className="card mt-3 mb-3">
          <div className="card-body bg-success">
            <h4 className="text-white text-center my-3">
              <label className="mb-3">{ayat ? ayt.nama : "AlQuran"}</label>
              <br />
              {ayat ? ayt.asma : "بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ"}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
