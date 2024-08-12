import { NextIntlClientProvider } from 'next-intl';
import NotFound from '../not-found';
import {unstable_setRequestLocale} from 'next-intl/server';



export default async function LocaleLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    NotFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}

