// import React, { useRef } from "react";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
// import { Separator } from "@/components/ui/separator";
// import { ChevronRight, ListCollapse } from "lucide-react";
// import Link from "next/link";
// import Text from "@/components/Text";
// import Image from "next/image";

// const generic_menu = require("../data/menu.json");
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

//   const MegaMenu = () => {
//     const menuRef = useRef(null);
//     const [hoveredCategory, setHoveredCategory] = useState(null);
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [allCourses, setAllCourses] = useState([]);

//     const handleTriggerClick = () => {
//       setIsMenuOpen(!isMenuOpen);

//     };
//     const closeMenu = () => {
//       if (menuRef.current) {
//         const closeEvent = new Event('keydown');
//         closeEvent.key = 'Escape';
//         menuRef.current.dispatchEvent(closeEvent);
//       }
//     };

//   useEffect(() => {
//     // Set the first category as selected when the component mounts
//     if (generic_menu.generic_menu.length > 0) {
//       setHoveredCategory(generic_menu.generic_menu[0].menu_name);
//     }
//   }, []);

//   //old code

//   // useEffect(() => {
//   //   if (isMenuOpen && !hoveredCategory) {
//   //     // Set to the first category when menu opens and no category is selected
//   //     setHoveredCategory(generic_menu.generic_menu.menu_name || null);
//   //   }
//   // }, [isMenuOpen, hoveredCategory]);

//   //new code
//   useEffect(() => {
//     if (generic_menu.generic_menu.length > 0) {
//       setHoveredCategory("All Courses");
//       const courses = generic_menu.generic_menu.flatMap(category => category.courses);
//       setAllCourses(courses);
//       console.log("courses: " + courses);
//     }
//   }, []);

//   //old code
//   // const currentCategory = generic_menu.generic_menu.find(
//   //   (category) => category.menu_name === hoveredCategory
//   // );

// // new code
// const currentCategory = hoveredCategory === "All Courses"
// ? { menu_name: "All Courses", courses: allCourses.slice(0, 3)}
// : generic_menu.generic_menu.find(category => category.menu_name === hoveredCategory);

//   return (
//     <div>
//       <NavigationMenu ref={menuRef} className="xs:hidden md:hidden lg:flex ml-4 ">
//         <NavigationMenuList>
//           <NavigationMenuItem>
//             <Link
//               href={`/courses`}
//               legacyBehavior
//               passHref
//               className="font-semibold"
//             >
//               <NavigationMenuTrigger
//                 onClick={handleTriggerClick}
//                 className="items-center border border-zinc-600"
//               >
//                 <NavigationMenuLink
//                   className={`${navigationMenuTriggerStyle()}`}
//                 >
//                   <div className="flex flex-col mr-2">
//                     <div className="w-4 h-[3px] mb-[2px] bg-[#0000008a] dark:bg-slate-50   rounded-sm" />
//                     <div className="w-4 h-[3px] mb-[2px] bg-[#0000008a] dark:bg-slate-50  rounded-sm" />
//                     <div className="w-4 h-[3px] mb-[2px] bg-[#0000008a] dark:bg-slate-50  rounded-sm" />
//                   </div>
//                   <Text variant="b"> All Courses </Text>
//                 </NavigationMenuLink>
//               </NavigationMenuTrigger>
//             </Link>
//             <NavigationMenuContent>
//               <div className="grid grid-cols-10 gap-3 w-[1080px] h-[80vh]">
//                 <ul className="space-y-2 bg-[#f3f9fe] dark:bg-detailcontrast leading-9 col-span-3 h-full overflow-y-auto text-[13px] font-semibold">
//                   <Text
//                     variant="body1"
//                     className="font-semibold mb-2 pl-4 pt-4"
//                   >
//                     Categories:
//                   </Text>

//            {/* newcode */}
//                   <li
//                     onMouseEnter={() => setHoveredCategory("All Courses")}
//                     className={`transition-colors duration-200 flex items-center justify-between pl-4 ${
//                       hoveredCategory === "All Courses" ? "bg-popover dark:bg-popover drop-shadow-md" : ""
//                     }`}
//                   >
//                     <span className="flex gap-2 items-center">
//                     <ListCollapse size={20} color="#3e9392" />
//                       <Link
//                         href="/courses"
//                         className="font-semibold p-1"
//                         onClick={(e) => {
//                           e.preventDefault();
//                           closeMenu();
//                           window.location.href = "/courses";
//                         }}
//                       >
//                         All Courses
//                       </Link>
//                     </span>
//                     {hoveredCategory === "All Courses" && <ChevronRight className="w-5 h-5" />}
//                   </li>
//            {/* new code */}

//                   {generic_menu.generic_menu.map((category, index) => (
//                     // console.log("category", category),
//                     <li
//                       key={index}
//                       onMouseEnter={() =>
//                         setHoveredCategory(category.menu_name)
//                       }
//                       className={`transition-colors duration-200 flex items-center justify-between pl-4 ${
//                         hoveredCategory === category.menu_name
//                           ? "bg-popover dark:bg-popover drop-shadow-md"
//                           : ""
//                       }`}
//                     >
//                       <span className="flex gap-2">
//                         <img
//                           src={category.image_media_path}
//                           alt={category.menu_name}
//                           width="25px"
//                           height="15px"
//                         />
//                         <Link
//                           href={category.slug}
//                           className="font-semibold p-1"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             closeMenu();
//                             window.location.href = category.slug;
//                           }}
//                         >
//                           {category.menu_name}
//                         </Link>
//                       </span>
//                       {hoveredCategory === category.menu_name && (
//                         <ChevronRight className="w-5 h-5" />
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//                 {currentCategory && (
//                   <ul className="space-y-2 col-span-5 leading-7 h-full overflow-y-auto custom-scrollbar p-4 text-[13px] font-semibold">
//                     <Text variant="body1" className="font-semibold mb-2">
//                       Courses:
//                     </Text>

//                     {currentCategory?.courses.map((course) => (
//                       <li key={course.id}>
//                         <Link
//                           href={course.slug}
//                           className="flex items-center gap-x-5 mb-4 hover:bg-lightbackground p-2"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             closeMenu();
//                             window.location.href = course.slug;
//                           }}
//                         >
//                           <span>
//                             {" "}
//                             <img
//                               src={`https://alpha.invensislearning.com/storage/new_menu_design/${course.image}`}
//                               alt={course.name}
//                               className="bg-white rounded-full w-11 h-11"
//                             />
//                           </span>
//                           <div>
//                             <Text className="font-medium">
//                               {" "}
//                               {course.name}{" "}
//                               {course.label && (
//                                 <sup
//                                   className="text-white rounded-full p-1"
//                                   style={{
//                                     backgroundColor:
//                                       course.label === "Best Seller"
//                                         ? "#00C24E"
//                                         : course.label === "Trending"
//                                         ? "#FD600E"
//                                         : course.label === "New"
//                                         ? "#9747FF"
//                                         : "#3f51b5",
//                                   }}
//                                 >
//                                   {course.label}
//                                 </sup>
//                               )}{" "}
//                             </Text>
//                             <Text className="text-[10px] text-[#858BB1] flex h-5 items-center space-x-3 font-semibold">
//                               {course.Acc && (
//                                 <>
//                                   {" "}
//                                   <span> {course.Acc} </span>
//                                   <Separator orientation="vertical" />{" "}
//                                 </>
//                               )}
//                               {course.d ? (
//                                 <span>{course.d} Days</span>
//                               ) : (
//                                 <span>Flexible training options</span>
//                               )}
//                               <Separator orientation="vertical" />
//                               <span>Instructor led</span>
//                               <Separator orientation="vertical" />
//                               <span>Live Training</span>
//                             </Text>
//                           </div>
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//                 {currentCategory && (
//                   <ul className="col-span-2 h-full overflow-y-auto p-4">
//                     <Text variant="body1" className="font-semibold mb-2">
//                       Accreditations:
//                     </Text>
//                     <li>
//                       {/* {currentCategory?.category_accredations.map(
//                         (accreditation, index) => (
//                           <Image
//                             key={index}
//                             src={`https://alpha.invensislearning.com/storage/new_menu_design/${accreditation.Accrediations}`}
//                             alt={accreditation.name}
//                             width={50}
//                             height={50}
//                             className="mb-5 bg-white rounded-full"
//                           />
//                         )
//                       )} */}
//                     </li>
//                   </ul>
//                 )}
//               </div>
//             </NavigationMenuContent>
//           </NavigationMenuItem>
//         </NavigationMenuList>
//       </NavigationMenu>
//     </div>
//   );
// };

// export default MegaMenu;
'use client'
import React, { useRef, useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ChevronRight, ListCollapse } from "lucide-react";
import Link from "next/link";
import Text from "@/components/Text";
import RenderCourseItem, { renderAccreditations } from "./render-course-item";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const generic_menu = require("../data/menu.json");

const MegaMenu = () => {
  const menuRef = useRef(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [allAccreditations, setAllAccreditations] = useState([]);

  const handleTriggerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (menuRef.current) {
      const closeEvent = new Event("keydown");
      closeEvent.key = "Escape";
      menuRef.current.dispatchEvent(closeEvent);
    }
  };

  useEffect(() => {
    if (generic_menu.generic_menu.length > 0) {
      setHoveredCategory("All Courses");
      const allAccreds = generic_menu.generic_menu.flatMap(
        (category) => category.category_accredations
      );
      const uniqueAccreds = Array.from(
        new Set(allAccreds.map((a) => a.Accrediations))
      ).map((accred) => allAccreds.find((a) => a.Accrediations === accred));
      setAllAccreditations(uniqueAccreds);
    }
  }, []);

  const renderCategoryContent = () => {
    if (hoveredCategory === "All Courses") {
      return (
        <div className="space-y-8">
          {generic_menu.generic_menu.map((category) => (
            <div key={category.menu_name}>
              <Text variant="body1" className="font-semibold mb-4 sticky top-0 bg-background opacity-85 p-2">
                {category.menu_name}
              </Text>
              <Separator/>
              <ul className="">
                {category.courses.slice(0, 3).map(RenderCourseItem)}
              </ul>
              <Link
                href={category.slug}
                className="block mt-4 text-blue-600 hover:underline text-[13px] font-medium text-center"
                onClick={closeMenu}
              >
               View All {category.menu_name} Courses
              </Link>
             
            </div>
          ))}
        </div>
      );
    } else {
      const currentCategory = generic_menu.generic_menu.find(
        (category) => category.menu_name === hoveredCategory
      );
      return currentCategory ? (
        <div>
       
        <Text variant="body1" className="font-semibold mb-4 sticky top-0 bg-background opacity-85 p-2">
          Courses
          <Separator className="mt-2" />
      </Text>
        <ul className="">
          {currentCategory.courses.map(RenderCourseItem)}
        </ul>
        </div>
      ) : null;
      
    }
  };

  return (
    <div>
      <NavigationMenu
        ref={menuRef}
        className="xs:hidden md:hidden lg:flex ml-4"
      >
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={handleTriggerClick}
              className="items-center border border-zinc-600"
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <div className="flex flex-col mr-2">
                  <div className="w-4 h-[3px] mb-[2px] bg-[#0000008a] dark:bg-slate-50 rounded-sm" />
                  <div className="w-4 h-[3px] mb-[2px] bg-[#0000008a] dark:bg-slate-50 rounded-sm" />
                  <div className="w-4 h-[3px] mb-[2px] bg-[#0000008a] dark:bg-slate-50 rounded-sm" />
                </div>
                <Text variant="b"> All Courses </Text>
              </NavigationMenuLink>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid grid-cols-10 gap-3 w-[1080px] h-[80vh]">
                <ul className="space-y-2 bg-[#f3f9fe] dark:bg-detailcontrast leading-9 col-span-3 h-full overflow-y-auto custom-scrollbar text-[13px] font-semibold">
                  <Text
                    variant="body1"
                    className="font-semibold mb-2 pl-4 pt-4"
                  >
                    Categories:
                  </Text>
                  <li
                    onMouseEnter={() => setHoveredCategory("All Courses")}
                    className={`transition-colors duration-200 flex items-center justify-between pl-4 ${
                      hoveredCategory === "All Courses"
                        ? "bg-popover dark:bg-popover drop-shadow-md"
                        : ""
                    }`}
                  >
                    <span className="flex gap-2 items-center">
                      <ListCollapse size={20} color="#3e9392" />
                      <Link
                        href="/courses"
                        className="font-semibold p-1"
                        onClick={(e) => {
                          e.preventDefault();
                          closeMenu();
                          window.location.href = "/courses";
                        }}
                      >
                        All Courses
                      </Link>
                    </span>
                    {hoveredCategory === "All Courses" && (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </li>
                  {generic_menu.generic_menu.map((category, index) => (
                    <li
                      key={index}
                      onMouseEnter={() =>
                        setHoveredCategory(category.menu_name)
                      }
                      className={`transition-colors duration-200 flex items-center justify-between pl-4 ${
                        hoveredCategory === category.menu_name
                          ? "bg-popover dark:bg-popover drop-shadow-md"
                          : ""
                      }`}
                    >
                      <span className="flex gap-2">
                        <Image
                          src={category.image_media_path}
                          alt={category.menu_name}
                          width={25}
                          height={15}
                        />
                        <Link
                          href={category.slug}
                          className="font-semibold p-1"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = category.slug;
                          }}
                        >
                          {category.menu_name}
                        </Link>
                      </span>
                      {hoveredCategory === category.menu_name && (
                        <ChevronRight className="w-5 h-5" />
                      )}
                    </li>
                  ))}
                </ul>
                <div className="col-span-5 h-full overflow-y-auto custom-scrollbar p-4 pt-0 text-[13px] font-semibold">
                  {renderCategoryContent()}
                </div>
                <div className="col-span-2 h-full overflow-y-auto custom-scrollbar p-4">
                  {renderAccreditations(
                    hoveredCategory === "All Courses"
                      ? allAccreditations
                      : generic_menu.generic_menu.find(
                          (category) => category.menu_name === hoveredCategory
                        )?.category_accredations || []
                  )}
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default MegaMenu;
