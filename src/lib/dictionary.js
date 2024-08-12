import 'server-only'
 
const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  de: () => import('../dictionaries/de.json').then((module) => module.default),
  us: () => import('../dictionaries/us.json').then((module) => module.default),  
  rw: () => import('../dictionaries/rw.json').then((module) => module.default),
  ly: () => import('../dictionaries/ly.json').then((module) => module.default),
}
 
export const getDictionary = async (locale) => dictionaries[locale]();