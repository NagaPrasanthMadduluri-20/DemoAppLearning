// import { NextResponse } from "next/server";
// import { countries, courses, categories } from "@/data/categories";


// export async function GET(request) {
//   const url = new URL(request.url);
//   const pathParts = url.pathname.split('/').filter(Boolean);

//   let countryCode = null;
//   let slug = null;
//   let city = null;

//   if (countries.includes(pathParts[0])) {
//     countryCode = pathParts[0];
//     slug = pathParts[1];
//     city = pathParts[2] || null;
//   } else {
//     slug = pathParts[0];
//   }

//   const isCourse = courses.some(course => course.slug === slug);
//   const isCategory = categories.some(category => category.slug === slug);

//   if (!isCourse && !isCategory) {
//     return NextResponse.json({ pageType: "NOT_FOUND" }, { status: 404 });
//   }

//   return NextResponse.json({
//     pageType: isCourse ? true : "",
//     countryCode,
//     slug,
//     city
//   }, { status: 200 });
// }

// // pageType: isCourse ? "COURSE" : "CATEGORY",
// // countryCode,
// // slug,
// // city