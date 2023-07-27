import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import { useParams } from "react-router-dom";
import ListSurah from "../components/ListSurah";
import Footer from "../components/Footer";

export default function PageSurah() {
  const { id } = useParams();
  return (
    <div>
      <Navbar />

      <ListSurah nomor={id} />

      <div className="" style={{ margin: "100px" }}>
        <Footer />
      </div>
    </div>
  );
}
