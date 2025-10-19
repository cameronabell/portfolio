import { socialIcon } from "shared";
import { Button } from "primereact/button";

export function SocialLinks(props) {
    const { socials, className } = props;

    return (
        <div className="flex gap-1 items-center">
            {socials &&
                socials.map((social) => (
                    <div key={social.id}>
                        <Button
                            className={
                                className +
                                " p-0 social-icon tw__animate__animated hover:tw__animate__rubberBand tw__animate__infinite"
                            }
                            rounded
                            text
                            aria-label={social.website}
                            type="button"
                            tooltip={social.website}
                            tooltipOptions={{
                                showDelay: 1000,
                                position: "bottom",
                            }}
                            onClick={() => window.open(social.url, "_blank")}
                        >
                            {socialIcon(social.website)}
                        </Button>
                    </div>
                ))}
        </div>
    );
}

export default SocialLinks;
