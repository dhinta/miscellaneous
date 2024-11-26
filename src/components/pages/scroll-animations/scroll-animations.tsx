import { Button } from '@/components/ui/button';
import { ScrollPageNavigationMenu } from '@/components/ui/scroll-navigation-menu';
import aboutLight02 from '/images/about-light-02-scroll.svg';
import heroLight from '/images/hero-light.svg';
import icon1Svg from '/images/icon-01-scroll.svg';
import icon2Svg from '/images/icon-02-scroll.svg';
import icon3Svg from '/images/icon-03-scroll.svg';
import logo from '/images/logo-scroll.svg';
import shape2Svg from '/images/shape-02-scroll.svg';
import shape3Svg from '/images/shape-03-scroll.svg';

function Header() {
  return (
    <header className="flex justify-between items-center mt-4">
      <div className="pl-12">
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <ScrollPageNavigationMenu />
      </div>
      <div className="pr-12">
        <Button className="mr-4">Login</Button>
        <Button variant="outline">Signup</Button>
      </div>
    </header>
  );
}

function Banner() {
  return (
    <section className="overflow-hidden pb-20 xl:pb-25">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
          <div className=" md:w-1/2 ml-8">
            <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">🔥 A Complete SaaS Product</h4>
            <h1 className="my-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
              Robust SaaS Product For
              <span className="relative ml-2.5 inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                Demo
              </span>
            </h1>
            <p>
              Equipped with all the essential integrations for a seamless SaaS startup launch, including authentication,
              database, key UI components, business pages, and more. Built using React, and TypeScript.
            </p>
            <div className="mt-10">
              <Button className="mr-4">Launch Sass</Button>
            </div>
          </div>
          <div className="hidden md:w-1/2 lg:block">
            <div className="relative 2xl:-mr-7.5">
              <img
                alt="shape"
                loading="lazy"
                width="36.9"
                height="36.7"
                decoding="async"
                data-nimg="1"
                className="absolute bottom-0 right-0 z-10"
                style={{ color: 'transparent' }}
                src={shape2Svg}
              />
              <img
                alt="shape"
                loading="lazy"
                width="21.64"
                height="21.66"
                decoding="async"
                data-nimg="1"
                className="absolute right-5 bottom-0 z-1"
                style={{ color: 'transparent' }}
                src={shape3Svg}
              />
              <div className=" relative aspect-[600/444] w-full">
                <img
                  alt="Hero"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="shadow-solid-l dark:hidden"
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    left: '0',
                    top: '0',
                    right: '0',
                    bottom: '0',
                    color: 'transparent',
                  }}
                  src={heroLight}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreFeature() {
  return (
    <section className="overflow-hidden pb-20 xl:pb-25 bg-slate-50 pt-6">
      <div className="mx-auto text-center">
        <div className="mb-4 inline-block rounded-full bg-zumthor px-4.5 py-1.5 dark:border dark:border-strokedark dark:bg-blacksection">
          <span className="font-large text-black dark:text-white">SOLID FEATURES</span>
        </div>
        <h1 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
          Core Features of Solid
        </h1>
        <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[30%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus.
          Phasellus aliquam ante in maximus.
        </p>
      </div>
    </section>
  );
}

function Boxes() {
  return (
    <section className="overflow-hidden mb-20 xl:pb-25 bg-white pt-6">
      <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5 p-6">
        <div className="rounded-lg bg-slate-50 p-6 mb-2 mr-4">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-blue-500">
            <img alt="title" loading="lazy" width="36" height="36" decoding="async" src={icon1Svg} />
          </div>
          <h3 className="my-4 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">Crafted for SaaS</h3>
          <p className="w-4/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
        </div>
        <div className="rounded-lg bg-slate-50 p-6 mb-2 mr-4">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-blue-500">
            <img alt="title" loading="lazy" width="36" height="36" decoding="async" src={icon2Svg} />
          </div>
          <h3 className="my-4 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
            High-quality Design
          </h3>
          <p className="w-4/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
        </div>
        <div className="rounded-lg bg-slate-50 p-6 mb-2 mr-4">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-blue-500">
            <img alt="title" loading="lazy" width="36" height="36" decoding="async" src={icon3Svg} />
          </div>
          <h3 className="my-4 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
            Next.js + TypeScript
          </h3>
          <p className="w-4/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
        </div>
        <div className="rounded-lg bg-slate-50 p-6 mb-2 mr-4">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-blue-500">
            <img alt="title" loading="lazy" width="36" height="36" decoding="async" src={icon3Svg} />
          </div>
          <h3 className="my-4 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
            Sanity Blog and Docs
          </h3>
          <p className="w-4/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
        </div>
        <div className="rounded-lg bg-slate-50 p-6 mb-2 mr-4">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-blue-500">
            <img alt="title" loading="lazy" width="36" height="36" decoding="async" src={icon1Svg} />
          </div>
          <h3 className="my-4 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
            DB, Auth and Stripe
          </h3>
          <p className="w-4/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
        </div>
        <div className="rounded-lg bg-slate-50 p-6 mb-2 mr-4">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-blue-500">
            <img alt="title" loading="lazy" width="36" height="36" decoding="async" src={icon2Svg} />
          </div>
          <h3 className="my-4 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
            Regular Free Updates
          </h3>
          <p className="w-4/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
        </div>
      </div>
    </section>
  );
}

function CardImage() {
  return (
    <section className="overflow-hidden mb-20 bg-white">
      <div className="mx-auto">
        <div className="flex items-center gap-8 lg:gap-32.5">
          <div className="pl-12 md:w-1/2 ml-8">
            <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">Launch Your SaaS Fast</h4>
            <h1 className="my-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
              Packed with All Essential
              <span className="relative ml-2.5 inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                Integrations
              </span>
            </h1>
            <p className="mb-6 w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies lacus non fermentum ultrices. Fusce
              consectetur le.
            </p>
            <div className="mt-10">
              <Button className="mr-4">Launch Sass</Button>
            </div>
          </div>

          <div className=" relative mx-auto hidden aspect-[788/526.5] md:block md:w-1/2">
            <img
              alt="About"
              loading="lazy"
              decoding="async"
              className="dark:hidden"
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: 'transparent',
              }}
              src={aboutLight02}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ImageCard() {
  return (
    <section className="overflow-hidden mb-20 bg-white">
      <div className="mx-auto">
        <div className="flex gap-8 lg:gap-32.5">
          <div className=" relative mx-auto hidden aspect-[788/526.5] md:block md:w-1/2">
            <img
              alt="About"
              loading="lazy"
              decoding="async"
              className="dark:hidden"
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: 'transparent',
              }}
              src={aboutLight02}
            />
          </div>

          <div className=" md:w-1/2 ml-8">
            <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">Launch Your SaaS Fast</h4>
            <h1 className="my-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
              Packed with All Essential
              <span className="relative ml-2.5 inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                Integrations
              </span>
            </h1>
            <p className="mb-6 w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies lacus non fermentum ultrices. Fusce
              consectetur le.
            </p>
            <div className="mt-10">
              <Button className="mr-4">Launch Sass</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ScrollAnimations() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <CoreFeature />
        <Boxes />
        <CardImage />
        <ImageCard />
      </main>
    </>
  );
}
