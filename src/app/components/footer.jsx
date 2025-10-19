import Logo from "shared/components/logo/logo";
import { SocialLinks, useSocials } from "shared";

export default function Footer() {
    const year = new Date().getFullYear();
    const { socials } = useSocials();
    return (
        <div className="flex flex-col w-full items-center py-10 gap-6">
            <Logo />
            <div className="px-8">
                <div>Copyright &copy; {year} | All Rights Reserved</div>
            </div>
            <SocialLinks socials={socials} />
        </div>
    );
}
