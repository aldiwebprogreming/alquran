import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Surah({ surah, asma, ayat, arti, suara, nomor }) {
  return (
    <div>
      <div className="card shadow">
        <div className="card-header text-center bg-success text-white">
          <h5>{asma}</h5>
          <p>
            ({surah} : {ayat})
            <br />
            <i> {arti}</i>
          </p>
        </div>
        <div className="card-body">
          <figure>
            <figcaption>Listen to the T-Rex:</figcaption>
            <audio controls src={suara}>
              <a href={suara}>Download audio</a>
            </audio>
          </figure>
          <div class="">
            <center>
              <Link
                type="button"
                className="btn btn-success"
                data-toggle="modal"
                data-target="#exampleModal"
                to={"surah/" + nomor}
              >
                Lihat Surah <i className="fas fa-arrow-book"></i>
              </Link>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}
