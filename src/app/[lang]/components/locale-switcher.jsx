"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { i18n } from "@/next-i18n.config";

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <ul className="flex gap-x-3">
      {i18n.locales.map((locale) => {
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              className="rounded-md border bg-black px-3 py-2 text-white"
            >
              {locale}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

//new code
// import { usePathname, useRouter } from 'next/navigation';
// import { i18n } from '@/next-i18n.config';

// export default function LocaleSwitcher() {
//   const pathname = usePathname();
//   const router = useRouter();

//   const redirectedPathName = (locale) => {
//     const segments = pathname.split('/');
//     const currentLocale = segments[1];
//     const isDefaultLocale = currentLocale === i18n.defaultLocale;

//     if (isDefaultLocale) {
//       segments.splice(1, 1);
//     } else {
//       segments[1] = locale;
//     }

//     return segments.join('/');
//   };

//   const handleLocaleChange = (locale) => {
//     const redirectedPath = redirectedPathName(locale);
//     router.push(redirectedPath);
//   };

//   return (
//     <ul className="flex gap-x-3">
//     {i18n.locales.map((locale) => (
//       <li key={locale}>
//         <button
//           onClick={() => handleLocaleChange(locale)}
//           className="rounded-md border bg-black px-3 py-2 text-white"
//         >
//           {locale}
//         </button>
//       </li>
//     ))}
//     </ul>
//   );
// }
