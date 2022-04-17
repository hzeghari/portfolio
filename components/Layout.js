import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import About from './About';

function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-full'>
      <Header />
      <Hero />
      <About />
      <main className='px-8 flex-1 flex flex-col'>{children}</main>
      {/* <main className='px-8 flex-1 flex flex-col'>{children}</main> */}
      <Footer />
    </div>
  );
}

export default Layout;
