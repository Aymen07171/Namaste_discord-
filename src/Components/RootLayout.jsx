import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const RootLayout = () => {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-[url('C:\Users\Public\Documents\motion_landingpage\src\assets\Background.png')] bg-contain blur-sm -z-10" />
      <div className="relative z-10">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
