import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import Header from './components/header';
import MainMenu from "app/components/main-menu";
import { ScrollToTop } from "shared";

export default function AppContainer() {
    return (
        <>
            <Header />
            <MainMenu />
            <ScrollToTop />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
