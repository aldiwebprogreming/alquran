import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonSurah from "./SkeletonSurah";
import Jumbotron from "./Jumbotron";
import { useParams } from "react-router-dom";

export default function ListSurah({ nomor }) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "https://api.npoint.io/99c279bb173a6e28359c/surat/" + nomor;
  const { id } = useParams();

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setList(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {loading ? <SkeletonSurah /> : <Jumbotron ayat={id} />}
      <div className="container">
        {list.map((ls) => {
          return (
            <div className="card mt-2 shadow border-success" key={ls.nomor}>
              <div className="card-body">
                <h5>
                  ({ls.nomor}) {ls.ar} <br />
                  <hr />
                  <i>{ls.id}</i>
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
