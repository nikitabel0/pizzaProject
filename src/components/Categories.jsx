import React from "react";

export default function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(1);
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Детские",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((name, index) => (
          <li
            className={activeIndex == index ? "active" : ""}
            onClick={() => setActiveIndex(index)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
