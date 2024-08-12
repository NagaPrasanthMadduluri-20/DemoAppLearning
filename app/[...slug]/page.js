import { categoriesData } from"@/data/categories"; 
import { getCountryHome, getUserById, getUsers } from "@/services";
import CourseScreen from "./screens/CourseScreen";
import CategoryScreen from "./screens/CategoryScreen";
import CountryHome from "./screens/CountryHome";

export async function generateStaticParams() {
  const params = [];

  categoriesData?.categories?.forEach((category) => {
    params.push({ slug: [category.slug] });
    categoriesData?.countries?.forEach((country) => {
      params.push({ slug: [country, category.slug] });
    });
  });

  categoriesData?.courses.forEach((course) => {
    params.push({ slug: [course.slug] });
    categoriesData?.countries.forEach((country) => {
      params.push({ slug: [country, course.slug] });
      if (categoriesData?.cities[country]) {
        categoriesData?.cities[country].forEach((city) => {
          params.push({ slug: [country, course.slug, city] });
        });
      }
    });
  });

  //console.log("params:", params);
  return params;
}

export default async function Page({ params }) {
  console.log("params:", params);
  const staticdata = await params;
  const pathName = Object.entries(staticdata).flatMap(([key, value]) => {
    return Array.isArray(value) ? value : [value];
  });

  const pathParts = pathName;

  // Check if the first part is a two-letter string (potential country slug)
  const twoLetterRegex = /^[a-zA-Z]{2}$/;
  const isCountrySlugPresent = twoLetterRegex.test(pathParts[0]);

  // Determine the countrySlug
  const lang = isCountrySlugPresent ? pathParts[0] : null;

  console.log("pathparts", pathParts);

   // Extract slug based on conditions
   let slug;
   if (isCountrySlugPresent) {
     slug = pathParts[1];
   } else {
     slug = pathParts[0]; // If no language, the first part is the slug
   }

  // Determine city
  const city =
    isCountrySlugPresent && pathParts.length >= 3
      ? pathParts[pathParts.length - 1]
      : null;

  // console.log("slug:", slug, "city:", city, "lang:", lang);
  // Check if the slug is valid (course or category)
  const isValidSlug =
  categoriesData?.courses?.some((course) => course.slug === slug) ||
  categoriesData?.categories?.some((category) => category.slug === slug) ||
  categoriesData?.countries?.some((country) => country.slug === slug);

  if (!isValidSlug) {
    return <div>404 - Page Not Found</div>;
  }


  const isCourse = categoriesData?.courses.some((course) => course.slug === slug);
  const isCategory = categoriesData?.categories.some((category) => category.slug === slug);
  const isCountry = categoriesData?.countries.some((country) => country.slug === slug);
   console.log("isCourse", isCourse);

  let data, error;

  if (isCourse) {
    ({ CourseData: data, error } = await getUserById(slug, lang, city));
  } else if (isCategory) {
    ({ CategoryData: data, error } = await getUsers(slug, lang));
  } else if (isCountry){
    ({ CountryHome: data, error } = await getCountryHome(lang));
  }
  //   console.log("isCourse:", isCourse);
  //   console.log("isCategory:", isCategory);
  // console.log("slug in page", Array.isArray(slug) ? slug.join("/") : slug);
  // console.log("lang in page", lang);
  // console.log("city in page", city);
  // console.log("coursedata", data);
  if (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading page</div>;
  }
   // If no data found with language, try fetching without language
   if (!data && lang) {
    if (isCourse) {
      ({ CourseData: data, error } = await getUserById(slug, null, city));
    } else if (isCategory) {
      ({ CategoryData: data, error } = await getUsers(slug, null));
    } 
  }

  

  if (!data) {
    console.log("No data found for this slug and language");
    return <div>Page not found</div>;
  }

  if (isCourse) {
    return <CourseScreen data={data} />;
  } else if (isCategory) {
    return <CategoryScreen data={data} />;
  } else if (isCountry) {
    return <CountryHome data={data}/>
  }
}
// const params = [];

//   // 1. Generate paths for categories without country
//   jsonData.categories.forEach(category => {
//     params.push({ slug: [category.slug] });
//   });

//   // 2. Generate paths for categories with country
//   jsonData.categories.forEach(category => {
//     jsonData.countries.forEach(country => {
//       params.push({ slug: [country, category.slug] });
//     });
//   });

//   // 3. Generate paths for courses without country
//   jsonData.courses.forEach(course => {
//     params.push({ slug: [course.slug] });
//   });

//   // 4. Generate paths for courses with country
//   jsonData.courses.forEach(course => {
//     jsonData.countries.forEach(country => {
//       params.push({ slug: [country, course.slug] });
//     });
//   });

//   // 5. Generate paths for courses with country and city
//   jsonData.courses.forEach(course => {
//     jsonData.countries.forEach(country => {
//       if (jsonData.cities[country]) {
//         jsonData.cities[country].forEach(city => {
//           params.push({ slug: [country, course.slug, city] });
//         });
//       }
//     });
//   });

// console.log("slug in page", slug);
// console.log("lang in page", lang);
// console.log("coursedata", data);

//console.log("Page type:", validation.pageType);
// console.log("slug in page", Array.isArray(slug) ? slug.join("/") : slug);
// console.log("lang in page", lang);
// console.log("city in page", city);
// console.log("coursedata", data);
// console.log("categorydata", data);
// Render your page based on the pageType and users data

// export async function generateStaticParams({ params }) {
//   const { lang } = params;
//   const { CategoryData } = await getUsers("", lang);
//   const { CourseData } = await getUserById("", lang);

//   const categoryPaths = CategoryData ? CategoryData.map((category) => ({
//     slug: category.page_slug,
//     lang,
//   })) : [];

//   const coursePaths = CourseData ? CourseData.map((course) => ({
//     slug: course.page_slug,
//     lang,
//   })) : [];

//   return [...categoryPaths, ...coursePaths];
// }



  // Get all valid params from generateStaticParams
  // const validParams = await generateStaticParams();

  // // Function to check if the current params match any valid params
  // const isValidParam = (currentParams) => {
  //   return validParams.some(
  //     (validParam) =>
  //       JSON.stringify(validParam.slug) === JSON.stringify(currentParams)
  //   );
  // };

  // // Construct the current params array
  // const currentParams = lang ? [lang, ...slug.split("/")] : slug?.split("/");
  // if (city) currentParams.push(city);
  // console.log("current params", currentParams);
  // // Check if the current params are valid
  // if (lang !== i18n.defaultLocale && !isValidParam(currentParams)) {
  //   return <div>404 - Page Not Found</div>;
  // }