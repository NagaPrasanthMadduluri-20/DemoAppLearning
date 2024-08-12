import { useTranslations } from 'next-intl';
import Container from '../../components/Container';
import Text from '@/components/Text';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <Container>
      <Text variant='h1'>{t('title')}</Text>
      {/* Rest of your page content */}
    </Container>
  );
}