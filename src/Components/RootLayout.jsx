    import Header from '../Components/Header';
    import Footer from '../Components/Footer';
    import { Outlet } from 'react-router-dom';

    function RootLayout() {
    return (
        <div className="relative min-h-screen">
        {/* Background div with blur */}
        <div className="fixed inset-0 bg-[url('C:\Users\Public\Documents\motion_landingpage\src\assets\Background.png')] bg-contain blur-sm -z-10" />
        {/* Content div */}
        <div className="relative z-10">
            <Header />
            <Outlet />
            <Footer />
        </div>
        </div>
    );
    }

    export default RootLayout;
