import React from "react";

import { getDictionary } from "@/lib/dictionary";
//import Link from 'next/link';
import CustomLink from "../custom-link";
import Link from "next/link";
//import { getUsers } from '@/lib/users';

export default async function Category({ params }) {
  const { users, lang, courseData } = params;
  //console.log("fxgzkl", courseData);
  const { page } = await getDictionary(lang);
  //console.log("users", users)

  // Extract the required data from the API response
  const {
    page_slug,
    page_name,
    category_name,
    link_title,
    CategoryCourseLevel,
  } = users;

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "80px" }}>
      <div key={page_slug}>
        <h3>
          <b>Page Name:</b> {page_name}
          {page.category.page_name}
        </h3>
        <h3>
          <b>Category Name:</b> {category_name}
          {page.category.page_name}
        </h3>
        <h3>
          <b>Page Slug:</b> <a href="">{page_slug}</a>
        </h3>
        <h3>
          <b>Link Title:</b> {link_title}
        </h3>
        <h3>
          <b>Link:</b>{" "}
          <Link href={`/${page_slug}`} lang={lang}>
            {page_slug}
          </Link>
        </h3>
      </div>

      <div>
        <h3>
          <b>Courses</b>
        </h3>
        <ul>
          {Object.entries(CategoryCourseLevel || {}).flatMap(([level, courses]) =>
              (courses || []).map((course) => (
                <li key={course.course_button_url}>
                  <CustomLink href={`/${course.course_button_url}`} lang={lang}>
                  {(courseData && courseData[course.course_button_url]?.course_name) || course.course_name}
                  </CustomLink>
                </li>
              ))
          )}
        </ul>
      </div>
    </div>
  );
}
