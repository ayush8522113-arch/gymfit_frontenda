import "../../css/AdminPayments.css";

function AdminPayments() {

  const payments = [

    {
      id: "ORD123",
      user: "Ayush",
      amount: 1999,
      status: "Paid",
    },

    {
      id: "ORD124",
      user: "Rahul",
      amount: 1499,
      status: "Pending",
    },

  ];

  return (
    <div className="admin-payments">

      <h1>
        Payment Information
      </h1>

      <table>

        <thead>

          <tr>

            <th>Order ID</th>

            <th>User</th>

            <th>Amount</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {payments.map((payment) => (

            <tr key={payment.id}>

              <td>{payment.id}</td>

              <td>{payment.user}</td>

              <td>
                ₹{payment.amount}
              </td>

              <td>

                <span
                  className={
                    payment.status ===
                    "Paid"

                      ? "paid"

                      : "pending"
                  }
                >

                  {payment.status}

                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default AdminPayments;