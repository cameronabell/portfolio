import {
    FaFacebook,
    FaXTwitter,
    FaYoutube,
    FaLinkedin,
    FaInstagram,
    FaGithub,
    FaTwitch,
    FaTiktok,
    FaReddit,
} from "react-icons/fa6";
import { SiApplemusic, SiBuymeacoffee, SiDiscord, SiGlassdoor, SiStackblitz, SiUpwork, SiXbox } from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";

export const socialIcon = (name) => {
    switch (name?.toLowerCase()) {
        case "facebook":
            return <FaFacebook />;
        case "instagram":
            return <FaInstagram />;
        case "twitter":
        case "x":
            return <FaXTwitter />;
        case "twitch":
            return <FaTwitch />;
        case "tiktok":
            return <FaTiktok />;
        case "reddit":
            return <FaReddit />;
        case "youtube":
            return <FaYoutube />;
        case "linkedin":
            return <FaLinkedin />;
        case "glassdoor":
            return <SiGlassdoor />;
        case "xbox":
            return <SiXbox />;
        case "apple music":
            return <SiApplemusic />;
        case "github":
            return <FaGithub />;
        case "discord":
            return <SiDiscord />;
        case "upwork":
            return <SiUpwork />;
        case "stackblitz":
            return <SiStackblitz />;
        case "buy me a coffee":
            return <SiBuymeacoffee />;
        case "email":
            return <MdAlternateEmail />;
        default:
            return;
    }
};
export default socialIcon;
