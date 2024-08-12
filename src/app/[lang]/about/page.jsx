import { getDictionary } from "@/lib/dictionary";

export default async function About({ params: { lang } }) {
  const { page } = await getDictionary(lang);

  return (
    <section className="py-24">
      <div className="flex flex-col justify-between items-center max-w-[1200px] mx-auto h-full px-8 mt">
        <h1 className="text-3xl font-bold">{page.about.title}</h1>
        <p className="text-gray-500">{page.about.description}</p>
      </div>
    </section>
  );
}
