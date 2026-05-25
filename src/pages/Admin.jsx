import { useState } from "react";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import AdminSidebar
  from "../components/admin/AdminSidebar";

import AdminUsers
  from "../components/admin/AdminUsers";

import AdminProducts
  from "../components/admin/AdminProducts";

import AdminPayments
  from "../components/admin/AdminPayments";

import "../css/Admin.css";

function Admin() {

  const [activeTab, setActiveTab] =
    useState("users");

  return (
    <>
      <Navbar />

      <section className="admin-section">

        <div className="admin-container">

          {/* SIDEBAR */}
          <AdminSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {/* CONTENT */}
          <div className="admin-content">

            {activeTab === "users" && (
              <AdminUsers />
            )}

            {activeTab === "products" && (
              <AdminProducts />
            )}

            {activeTab === "payments" && (
              <AdminPayments />
            )}

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Admin;