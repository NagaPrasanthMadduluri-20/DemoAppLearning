


import Link from 'next/link'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './locale-switcher'
import CustomLink from './custom-link'
import  categories  from "@/lib/categories"
import HeaderClient from './HeaderClient'


export default async function Header({ lang, setSelectedCategory, categorySlug }) {
  const { navigation } = await getDictionary(lang)
// console.log("categorySlug", categorySlug);
  return (
    <header className='py-6'>
      <nav className='container flex items-center justify-between'>
        <ul className='flex gap-x-8'>
          <li>
            <CustomLink href="/" lang={lang}>{navigation.home}</CustomLink>
          </li>
          <li>
            <Link href= {`/about`}>{navigation.about}</Link>
          </li>
          <li>
          <ul>
             <HeaderClient categorySlug={categorySlug} setSelectedCategory={setSelectedCategory}  lang={lang}/>
            </ul>
         </li>
         
          <li>
            <Link href={`/corporategrouptraining`}>Corporate-Group-Training</Link>
          </li>
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  )
}

// {`/${pageSlug}`}