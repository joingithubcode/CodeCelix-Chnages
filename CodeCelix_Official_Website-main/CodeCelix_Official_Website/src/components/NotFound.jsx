import Header from './Header';
import Footer from './Footer';
import LogoDark from '/Logo/LogoDark.png';
import LogoLight from '/Logo/LogoLight.png';

export default function NotFound() {
  return (
    <>
      <Header logo={LogoLight} />
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
          <div className="flex flex-col items-center justify-center text-center px-4 mb-16">
            <h1 className="text-5xl md:text-5xl font-semibold text-gray-100">
              404 Not Found
            </h1>
            <h1 className="text-2xl md:text-3xl font-semibold mt-6">
              This page has not been generated
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-500">
              Tell me what you would like on this page
            </p>
          </div>
        </div>
      </section>
      <Footer logo={LogoDark} />
    </>
  );
}
