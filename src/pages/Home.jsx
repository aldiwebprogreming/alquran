import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Surah from "../components/Surah";
import Jumbotron from "../components/Jumbotron";
import axios from "axios";
import Footer from "../components/Footer";
import SkeletonHome from "../components/SkeletonHome";

export default function Home() {
  const [surah, setSurah] = useState([]);
  const [loading, setLoading] = useState(false);

  const getSurah = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.npoint.io/99c279bb173a6e28359c/data"
      );
      setSurah(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error.message);
    }
  };

  useEffect(() => {
    getSurah();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        {" "}
        {loading ? <SkeletonHome /> : <Jumbotron />}
      </div>

      <div className="container">
        <div className="row">
          {surah.map((list) => {
            return (
              <div className="col-sm-4 mt-4" key={list.nomor}>
                <Surah
                  surah={list.nama}
                  asma={list.asma}
                  ayat={list.ayat}
                  arti={list.arti}
                  suara={list.audio}
                  nomor={list.nomor}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="" style={{ margin: "100px" }}>
        <Footer />
      </div>
    </div>
  );
}
