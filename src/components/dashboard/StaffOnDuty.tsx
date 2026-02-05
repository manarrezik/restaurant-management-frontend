import React from 'react';

interface Staff {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: string;
}

const StaffOnDuty: React.FC = () => {
  const staffMembers: Staff[] = [
    {
      id: 1,
      name: 'Albert Flores',
      role: 'Lead Operations',
      avatar: 'https://i.pravatar.cc/100?img=33',
      rating: '9/10'
    },
    {
      id: 2,
      name: 'Guy Hawkins',
      role: 'Cooker',
      avatar: 'https://i.pravatar.cc/100?img=15',
      rating: '6/10'
    },
    {
      id: 3,
      name: 'Ronald Richards',
      role: 'Sales Manager',
      avatar: 'https://i.pravatar.cc/100?img=45',
      rating: '7/10'
    },
    {
      id: 4,
      name: 'David Miller',
      role: 'Chef',
      avatar: 'https://i.pravatar.cc/100?img=8',
      rating: '4/10'
    }
  ];

  return (
    <div className="staff-on-duty-card">
      <h3 className="staff-title">Staff On Duty</h3>
      
      <div className="staff-list">
        {staffMembers.map((staff) => (
          <div key={staff.id} className="staff-item">
            <img 
              src={staff.avatar} 
              alt={staff.name} 
              className="staff-avatar" 
            />
            <div className="staff-info">
              <span className="staff-name">{staff.name}</span>
              <span className="staff-role">{staff.role}</span>
            </div>
            <span className="staff-rating">{staff.rating}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffOnDuty;