import { Button } from "primereact/button";
import { MdClose, MdMenu } from "react-icons/md";
import { useMainMenuStore } from "shared/stores/main-menu-store";
import Logo from "shared/components/logo/logo";

export default function Header() {
    const { opened, toggleMenu } = useMainMenuStore();

    return (
        <header className="flex justify-between items-center py-1 px-2 md:py-8 md:px-20 w-full absolute top-0 z-20">
            <Logo />
            <Button
                className="text-white menu-icon z-10 p-0 mr-0 mr-5 md:py-3 md:px-5"
                text
                aria-label="Filter"
                type="button"
                tooltip="Main Menu"
                tooltipOptions={{ showDelay: 1000, position: "left" }}
                onClick={() => toggleMenu()}
            >
                {opened ? (
                    <MdClose className="tw__animate__animated tw__animate__rubberBand" />
                ) : (
                    <MdMenu className="tw__animate__animated tw__animate__rubberBand" />
                )}
            </Button>
        </header>
    );
}