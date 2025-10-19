import { useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { useMainMenuStore } from "shared/stores/main-menu-store";

export default function MainMenu() {
    const { opened, toggleMenu } = useMainMenuStore();
    const navigate = useNavigate();
    const menuRef = useRef(null);

    useEffect(() => {
        const menuElement = menuRef.current;

        menuElement.classList.remove("tw__animate__fadeInUp");
        menuElement.classList.remove("tw__animate__fadeOutDown");

        const handleAnimationEnd = () => {
            if (opened) {
                menuElement.classList.remove("tw__animate__fadeInUp");
            } else {
                menuElement.classList.remove("tw__animate__fadeOutDown");
                menuElement.classList.remove("flex");
                menuElement.classList.add("hidden");
            }
        };
        
        if (opened) {
            menuElement.classList.add("tw__animate__fadeInUp");
            menuElement.classList.add("flex");
            menuElement.classList.remove("hidden");
        } else {
            menuElement.classList.add("tw__animate__fadeOutDown");
        }

        menuElement.addEventListener("animationend", handleAnimationEnd);

        return () => {
            if (menuElement) {
                menuElement.removeEventListener(
                    "animationend",
                    handleAnimationEnd
                );
            }
        };
    }, [opened]);

    const closeAndNavigate = (path) => {
        toggleMenu();
        navigate(path);
    };

    return (
        <menu
            ref={menuRef}
            className="absolute w-full h-[100vh] flex-col gap-8 justify-center items-center tw__animate__animated backdrop-brightness-50 backdrop-blur-sm bg-ca-plum text-ca-gray top-0 z-10 hidden"
        >
            <Button
                link
                label="Home"
                className="text-4xl text-white"
                onClick={() => closeAndNavigate("/")}
            />
            <Button
                link
                label="Resume"
                className="text-4xl text-white"
                onClick={() => closeAndNavigate("/resume")}
            />
            <Button
                link
                label="Contact Me"
                className="text-4xl text-white"
                onClick={() => closeAndNavigate("/contact")}
            />
            <Button
                link
                label="Project"
                className="text-4xl text-white"
                onClick={() => closeAndNavigate("/projects/ups-inside-ops")}
            />
        </menu>
    );
}
