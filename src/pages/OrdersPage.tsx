import React, { useState } from 'react';

const OrdersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Pre-payment');

  const tabs = ['All Order', 'Pre-payment', 'To be Received', 'Completed', 'Canceled'];

  return (
    <div>
      <div className="orders-tabs">
        {tabs.map(tab => (
          <div 
            key={tab} 
            className={`tab-item ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="empty-state">
        <div className="empty-icon">
          {/* Placeholder for the document with X icon */}
          <span>📄</span> 
        </div>
        <div className="empty-text">OOPS</div>
        <div className="no-result">No Result Found</div>
      </div>
    </div>
  );
};

export default OrdersPage;
