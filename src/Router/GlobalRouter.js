import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivacyAgreement from "../Pages/PrivacyAgreement";
import UserAgreement from "../Pages/UserAgreement";
import Homepage from "../Pages/Homepage";
import Movies from "../Pages/Movies";
import Series from "../Pages/Series";

export default function GlobalRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/PrivacyAgreement" element={<PrivacyAgreement />} />
        <Route path="/UserAgreement" element={<UserAgreement />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Series" element={<Series />} />
      </Routes>
    </BrowserRouter>
  );
}
