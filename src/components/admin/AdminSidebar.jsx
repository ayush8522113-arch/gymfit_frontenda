import "../../css/AdminSidebar.css";

function AdminSidebar({

  activeTab,

  setActiveTab,

}) {

  return (
    <div className="admin-sidebar">

      <h2>
        ADMIN PANEL
      </h2>

      <button
        className={
          activeTab === "users"
            ? "active"
            : ""
        }

        onClick={() =>
          setActiveTab("users")
        }
      >
        Users
      </button>

      <button
        className={
          activeTab === "products"
            ? "active"
            : ""
        }

        onClick={() =>
          setActiveTab("products")
        }
      >
        Products
      </button>

      <button
        className={
          activeTab === "payments"
            ? "active"
            : ""
        }

        onClick={() =>
          setActiveTab("payments")
        }
      >
        Payments
      </button>

    </div>
  );
}

export default AdminSidebar;