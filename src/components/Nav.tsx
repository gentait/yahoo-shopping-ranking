import React from "react";
import { Link } from "react-router-dom";

export default function Nav({ categories }: any) {
  //遷移先パスの
  const to = (category: any) =>
    category.id === "1" ? "/all" : `/category/${category.id}`;
  return (
    <ul>
      {categories.map((category: any) => (
        <li key={`nav-item-${category.id}`}>
          <Link to={to(category)}>{category.name}</Link>
        </li>
      ))}
    </ul>
  );
}
