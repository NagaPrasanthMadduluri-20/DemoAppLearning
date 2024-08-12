// import React from 'react'
"use client";
import Link from "next/link";
import { i18n } from "@/next-i18n.config";

const CustomLink = ({ href, lang, ...props }) => {
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? href : `/${lang}${href}`;
  return <Link href={path} {...props} />;
};

//new code
// import { usePathname } from 'next/navigation';

// const CustomLink = ({ href, lang, ...props }) => {
//   const pathname = usePathname();
//   const isDefaultLang = lang === i18n.defaultLocale;
//     const isAbsolutePath = href.startsWith('/');

//   const path = isDefaultLang
//       ? isAbsolutePath
//       ? href
//       : `/${href}`
//     : isAbsolutePath
//     ? `/${lang}${href}`
//     : `/${lang}/${href}`;

//   return <Link href={path} {...props} />;
// };
// export default CustomLink

// import React from 'react';

// const CustomLink = ({ href, lang, ...props }) => {
//   const isDefaultLang = lang === i18n.defaultLocale;
//   let path = isDefaultLang ? href : `/${lang}${href}`;

//   // Add logic to handle multiple segments
//   if (href.startsWith('/categories')) {
//     // Add more segments as needed
//     path = isDefaultLang ? href : `/${lang}${href}`;
//   }

//   return <Link href={path} {...props} />;
// };

export default CustomLink;
