import React from "react";

interface Category {
  id: number;
  name: string;
  percent: number;
  image: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Chicken Wings",
    percent: 94,
    image: "/images/chicken-wings.png",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    percent: 82,
    image: "/images/pizza.png",
  },
  {
    id: 3,
    name: "Beef Burger",
    percent: 77,
    image: "/images/burger.png",
  },
  {
    id: 4,
    name: "French Fries",
    percent: 33,
    image: "/images/fries.png",
  },
];

const TopCategories: React.FC = () => {
  return (
    <div className="top-categories-card">
      <h3 className="top-categories-title">Top Categories</h3>

      <div className="top-categories-list">
        {categories.map((cat) => (
          <div key={cat.id} className="top-category-item">
            <img
              src={cat.image}
              alt={cat.name}
              className="top-category-image"
            />

            <div className="top-category-info">
              <span className="top-category-name">{cat.name}</span>
              <span className="top-category-percent">{cat.percent}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
