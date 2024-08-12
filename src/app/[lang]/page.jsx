import { getDictionary } from '@/lib/dictionary';

export default async function Home({
  params: { lang }
}) {

  const { page } = await getDictionary(lang);

  return (
    <section className="py-24">
    <div className="flex flex-col justify-between items-center max-w-[1200px] mx-auto h-full px-8 mt">
      <h2 className='text-3xl font-bold'style={{color: "#000"}}>{page.home.title}</h2>
      <p className='text-3xl font-bold'style={{color: "#000"}}>{page.home.description}</p>
    </div>
    </section>
  );
}
