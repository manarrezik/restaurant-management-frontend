import React from 'react';

interface Order {
  id: string;
  orderName: string;
  time: string;
  price: string;
  status: 'Active' | 'Completed' | 'Cancelled';
}

const RecentOrders: React.FC = () => {
  const orders: Order[] = [
    {
      id: '01',
      orderName: 'Beef Burger',
      time: '2.07 PM',
      price: '$97.96',
      status: 'Active'
    },
    {
      id: '02',
      orderName: 'Caesar Salad',
      time: '12.44 PM',
      price: '$76.56',
      status: 'Completed'
    },
    {
      id: '03',
      orderName: 'Margherita Pizza',
      time: '12.24 PM',
      price: '$98.87',
      status: 'Active'
    },
    {
      id: '04',
      orderName: 'Grilled Salmon',
      time: '11.00 AM',
      price: '$87.38',
      status: 'Cancelled'
    },
    {
      id: '05',
      orderName: 'Chicken Wings',
      time: '9.00 AM',
      price: '$97.56',
      status: 'Completed'
    }
  ];

  const getStatusClass = (status: string) => {
    return status.toLowerCase();
  };

  return (
    <div className="recent-orders">
      <div className="orders-header">
        <h2 className="orders-title">Recent Orders</h2>
        <div className="orders-tabs">
          <button className="tab-btn active">Daily</button>
          <button className="tab-btn">Weekly</button>
          <button className="tab-btn">Monthly</button>
        </div>
      </div>

      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>ORDER ID</th>
              <th>ORDER NAME</th>
              <th>TIME</th>
              <th className="text-right">TIME</th>
              <th className="text-right">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="order-id">{order.id}</td>
                <td className="order-name">{order.orderName}</td>
                <td className="order-time">{order.time}</td>
                <td className="order-price text-right">{order.price}</td>
                <td className="text-right">
                  <span className={`status-badge status-${getStatusClass(order.status)}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;