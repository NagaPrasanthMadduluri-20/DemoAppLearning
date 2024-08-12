import React from "react";
import { getDictionary } from "@/lib/dictionary";
import CustomLink from "../custom-link";
import Link from "next/link";

export default async function Course({ params }) {
  const { user, lang } = params;
  const { page } = await getDictionary(lang);

  // Extract the required data from the API response
  const { page_slug, page_name, category_name, link_title } = user;

  return (
    <div>
      <div>
        <h3>
          <b>Page Name:</b> {page_name}
        </h3>
        <h3>
          <b>Category Name:</b> {category_name}
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
    </div>
  );
}