"use client";

import React from "react";
import CustomLink from "./custom-link";
import { jsonData } from "@/lib/categories";

//console.log("huygfd", jsonData );

const HeaderClient = ({ setSelectedCategory, lang }) => {
  const handleCategoryClick = (category) => {
    setSelectedCategory(category.page_slug);
  };

  return (
    <ul>
      {jsonData &&
        jsonData.generic_menu.map((category) => (
          <li key={category.slug}>
            <CustomLink
              href={`/${category.slug}`}
              lang={lang}
              onClick={() => handleCategoryClick(category)}
            >
              {category.name}
            </CustomLink>
          </li>
        ))}
    </ul>
  );
};

export default HeaderClient;
