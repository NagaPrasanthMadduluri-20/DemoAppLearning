// // category page logic



// import { getDictionary } from '@/lib/dictionary';
// //import Link from 'next/link';
// import CustomLink from '../../components/custom-link';


// export default async function CategoryPage({ params }) {
//   const { lang } = params;

//   // Fetch page data from dictionary based on language
//   const { page } = await getDictionary(lang);

//   // Fetch API data
//   // Fetch API data directly in the page component
//   const apiUrl = 'https://alpha.invensislearning.com/api/get-dynamic-page-details/GENERIC%20COURSE/pmp-certification-training';
//   const response = await fetch(apiUrl);
//   const apiData = await response.json();

//   // Extract the required data from the API response
//   const { page_name, category_name, page_slug, service_id, breadcrumb } = apiData;

//   return (
//     <div>
//       <h2>{page.category.title}</h2>
//       <p>{page.category.description}</p>
//       <div>
//         <h3>Page Name: {page_name}</h3>
//         <h3>Category Name: {category_name}</h3>
//         <h3>Page Slug: <a href=""> {page_slug}</a></h3>
     
//             <CustomLink href="/{page_slug}" lang={lang}>{page_slug}</CustomLink>
//             {/* <CustomLink href={page_slug} lang={lang}>{page_slug}</CustomLink> */}
 
//         <h3>Service ID: {service_id}</h3>
//         <h3>Breadcrumb:</h3>
//         <ul>
//           {breadcrumb.map((item, index) => (
//             <li key={index}>
//               <a href={item.url}>{item.name}</a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }





// export async function generateStaticParams({ params }) {
//   const { slug, lang } = params;
//   console.log("jhgc", slug);
//   const { users } = await getUsers("agile-project-management", lang);

//   //console.log("users", users)

//   if (!users) {
//     return [];
//   }

//   const slugs = users.map((user) => [user.page_slug]);
//   const paths = slugs.map((slug) => ({ slug, lang }));
//   return paths;
// }

// export default async function Page({ params }) {
//   const { slug, lang } = params;

//   if (!slug || slug.length === 0) {
//     return <Category lang={lang} />;
//   }
// }

// import { getDictionary } from "@/lib/dictionary";
// import { getUsers } from "@/lib/users";
// import Category from "../components/users/Category";
// export async function generateStaticParams({ params }) {
//   const { lang } = params;
//   const { users } = await getUsers('', lang);
//   //console.log("users", users);
//   if (!users) {
//     return [];
//   }

//   const slugs = users.map((user) => [user.page_slug]);
// console.log("slugs", slugs);
//   const paths = slugs.map((slug) => ({ slug, lang }));
//   console.log("paths", paths);
//   return paths;
// }

// export default async function Page({ params }) {
//   const { slug, lang } = params;
  
//   const { users } = await getUsers(slug.join('/'), lang);
//   return <Category params={{ users, lang }} />;
// }


//new code 
import { getUserById, getUsers } from "@/lib/users";
import Course from "../components/user/Course";
import Category from "../components/users/Category";

export async function generateStaticParams({ params }) {
  const { lang } = params;
  const { users } = await getUsers("", lang);

  if (!users) {
    return [];
  }

  

  const slugs = users.map((user) => [user.page_slug]);
  const paths = slugs.map((slug) => ({ slug, lang }));

  const coursePaths = [];
  for (const user of users) {
    const { CategoryCourseLevel } = user;
    Object.entries(CategoryCourseLevel || {}).flatMap(([level, courses]) =>
       (courses || []).map((course) => {
        if (course.course_button_url) {
          const courseSlug = course.course_button_url
            .split("/")
            .slice(1)
            .join("/");
          coursePaths.push({ slug: [courseSlug], lang, courseData: course });
        }
      })
    );
  }
  return [...paths, ...coursePaths];
}

// export async function generateMetadata({ params }) {

//   const { slug, lang } = params;
//   const isCourse = slug.some((part) => part.includes("training"));
//   console.log("isCourse", isCourse);
//   return {
//     isCourse,
//   };
// }

export async function generateMetadata({ params }) {
  const { slug, lang } = params;
  const isCourse = await checkIfCourse(slug.join("/"), lang);
  return {
    isCourse,
  };
}

const checkIfCourse = async (slug, lang) => {
  const { user } = await getUserById(slug, lang);
  return user && user.CategoryCourseLevel;
  
};

export default async function Page({ params }) {

  const { slug, lang } = params;
  const isCourse = (await generateMetadata({ params })).isCourse;


  if (isCourse) {

    const { user } = await getUserById(slug.join("/"), lang);
 
    return <Course params={{ user, lang }} />;
  } else {
    const { users } = await getUsers(slug.join("/"), lang);
    const courseData = params.courseData || null; // Get the course data from params
    //console.log("coursedata", courseData)
    return <Category params={{ users, lang, courseData}} />;
  }
}