import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivacyAgreement from "../Pages/PrivacyAgreement";
import UserAgreement from "../Pages/UserAgreement";
import Homepage from "../Pages/Homepage";

export default function GlobalRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/PrivacyAgreement" element={<PrivacyAgreement />} />
        <Route path="/UserAgreement" element={<UserAgreement />} />
      </Routes>
    </BrowserRouter>
  );
}
