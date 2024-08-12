import Text from "@/components/Text";
import Container from "../components/Container";


export default function Home() {

  return (
    <>
      <Container className="py-24">
        <div className="flex flex-col justify-between items-center mx-auto h-full px-8 mt">
          <Text variant="h2">Welcome to NextJs i18n - india</Text>
          <Text variant="body1">
            Internationalization in NextJs 13 App router - india
          </Text>
        </div>

      </Container>
    </>
  );
}
