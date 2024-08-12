import { defaultLocale } from "@/i18n-config";


export async function getUsers(slug, lang) {
  console.log("getUsers called with slug:", slug, "and lang:", lang);
  try {
    const endpoint =
      lang === defaultLocale
        ? `https://stagingalpha.invensislearning.com/api/get-dynamic-page-details/GENERIC%20CATEGORY/${slug}/?geoLocation=&current_url=http://localhost:9091/${slug}/`
        : `https://stagingalpha.invensislearning.com/api/get-dynamic-page-details/CATEGORY/${slug}/${lang}?geoLocation=${lang}&current_url=http://localhost:9091/${lang}/${slug}/`;
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    const contentType = res.headers.get("Content-Type");
    console.log(`Content-Type: ${contentType}`);
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Invalid response type");
    }
    const data = await res.json();
    //console.log("category", data);
    if (!data) {
      throw new Error("Failed to fetch users");
    }
    return { CategoryData: data, error: null };
  } catch (error) {
    return {
      CategoryData: null,
      error: error.message || "Failed to fetch users",
    };
  }
}

export async function getUserById(slug, lang, city) {
  console.log(
    "getUsersId called with slug:",
    slug,
    "and lang:",
    lang,
    "and city:",
    city
  );
  try {
    let endpoint;
    if (slug && city && lang) {
      // Case: Course City (e.g., domain/us/course-slug/city)
      endpoint = `https://stagingalpha.invensislearning.com/api/get-dynamic-page-details/COURSE%20CITY/${slug}/${lang}/${city}?geoLocation=${lang}&current_url=http://localhost:9091/${lang}/${slug}/${city}/`;
    } else if (slug && lang) {
      // Case: Course Country (e.g., domain/us/course-slug)
      endpoint =
        lang === defaultLocale
          ? `https://stagingalpha.invensislearning.com/api/get-dynamic-page-details/GENERIC%20COURSE/${slug}?current_url=http://localhost:9091/${slug}/`
          : `https://stagingalpha.invensislearning.com/api/get-dynamic-page-details/COURSE%20COUNTRY/${slug}/${lang}?geoLocation=${lang}&current_url=http://localhost:9091/${lang}/${slug}/`;
    }
    const res = await fetch(endpoint);
    const data = await res.json();
    //console.log("course", data);
    if (!data) {
      throw new Error("User not found");
    }
    //console.log("data", data);
    return { CourseData: data, error: null };
  } catch (error) {
    return { CourseData: null, error: error.message || "Failed to fetch user" };
  }
}
