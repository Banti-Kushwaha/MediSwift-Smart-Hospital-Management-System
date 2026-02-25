import "./PharmacyPage.css";

const PharmacyPage = () => {
  return (
    <div className="dashboard">

      {/* ===== TOP SECTION ===== */}
      <h1 className="welcome">Welcome to Medi-Swift Pharmacy</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Available Medicines</h3>
          <p>120</p>
        </div>

        <div className="stat-card">
          <h3>Low Stock</h3>
          <p>8</p>
        </div>

        <div className="stat-card">
          <h3>Orders Today</h3>
          <p>15</p>
        </div>

        <div className="stat-card">
          <h3>Revenue</h3>
          <p>₹12,500</p>
        </div>
      </div>

      {/* ===== RECENT ORDERS ===== */}

      <div className="section">
        <div className="section-header">
          <h2>Recent Orders</h2>
          <span className="view-all">View All</span>
        </div>

        <div className="lab-list">

          <div className="lab-item">
            <img src="https://cdn-icons-png.flaticon.com/512/4320/4320371.png" alt="medicine" />
            <div>
              <h4>Paracetamol 500mg</h4>
              <p>Ordered · 2026-02-20</p>
            </div>
            <span className="badge completed">Delivered</span>
          </div>

          <div className="lab-item">
            <img src="https://cdn-icons-png.flaticon.com/512/4320/4320371.png" alt="medicine" />
            <div>
              <h4>Vitamin D Tablets</h4>
              <p>Ordered · 2026-02-19</p>
            </div>
            <span className="badge progress">Processing</span>
          </div>

          <div className="lab-item">
            <img src="https://cdn-icons-png.flaticon.com/512/4320/4320371.png" alt="medicine" />
            <div>
              <h4>Insulin Injection</h4>
              <p>Ordered · 2026-02-18</p>
            </div>
            <span className="badge pending">Pending</span>
          </div>

        </div>
      </div>

    </div>
  );
};

export default PharmacyPage;