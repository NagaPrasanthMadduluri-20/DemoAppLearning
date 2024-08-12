'use client'
import Image from "next/image";
import Link from "next/link";
import Text from "@/components/Text";
import { ModeToggle } from "@/components/mode-toggle";
import Mobilemenu from "./mobile-menu";
import MegaMenu from "./mega-menu";
import { useTheme } from "next-themes";
import Container from "../components/Container";

export default function Header() {
  const { theme } = useTheme();

  return (
    <Container className="py-0 px-0 max-w-full mx-auto shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-white/30 dark:bg-black/30">
    <header className="">
      <nav className="container flex items-center justify-between text-card-foreground h-20 xs:ml-3 lg:mx-auto xl:mx-auto 2xl:mx-auto">
        <div className="flex items-center gap-5 justify-center">
          <div className="lg:hidden z-50">
            <Mobilemenu />
          </div>
          <div className="max-w-full">
          <Link href={`/`}>
            <Image
              src={
                theme === "dark"
                  ? "https://stagingbeta.invensislearning.com/static/images/logo-white.svg"
                  : "https://www.invensislearning.com/static/images/invensis-learning-logo.svg"
              }
              width={160}
              height={140}
              className="max-w-[160px]"
              alt="Invensis Learning Logo"
              priority
            />
          </Link>
          </div>
          <div> <MegaMenu /> </div>
        </div>
        <Text variant="body1">
          <ul className="gap-x-8 xs:hidden lg:flex xl:flex items-center justify-center py-3">
            <li>
              <Link href={`/corporategrouptraining`}>
                Corporate Group Training
              </Link>
            </li>
            <li>
              <Link href={`/testimonials`}>Testimonials</Link>
            </li>
            <li>
              <Link href={`/join_as_a_trainer`}>Join as a Trainer</Link>
            </li>
            <li>
              <Link href={`/resources`}>Resources</Link>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </Text>
      </nav>
    </header>
    </Container>
  );
}

//  {`/${pageSlug}`}
// {
//   /* <li>
//           <ul>
//              <HeaderClient categorySlug={categorySlug} setSelectedCategory={setSelectedCategory}  lang={lang}/>
//             </ul>
//          </li> */
// }
// {
//   /* <li>
//             <CustomLink href={`/`} lang={lang}>agile-project-managameent </CustomLink>
//           </li> */
// }
