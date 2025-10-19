import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { PageWrapper, BlockWrapper, LeanLeft, LeanRight, useSocials, SocialLinks } from "shared";

export default function ContactView() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [mainSocials, setMainSocials] = useState(null);
    
    const { socials } = useSocials();

    useEffect(() => {
        const filtered = socials.filter((s) => {
            switch (s.website?.toLowerCase()) {
                case "linkedin":
                case "x":
                case "github":
                    return true;
                default:
                    return false;
            }
        });
        setMainSocials(filtered);
    }, [socials]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = { name, email, message };

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Message sent successfully!");
            } else {
                alert("Failed to send message.");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            alert("An error occurred while sending the message.");
        }
    };

    return (
        <>
            <PageWrapper className="gap-2 pb-8">
                <h1>Contact Me</h1>
                <Divider className="max-w-96" />
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <p>
                        I’m excited to hear about the opportunity you have for
                        me! Use this form to leave me a message and I will be
                        sure to get back to you soon.
                    </p>
                    <InputText
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <InputText
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <InputTextarea
                        placeholder="Message"
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        autoResize
                    />
                    <Button label="Send" />
                </form>
            </PageWrapper>
            <LeanRight />
            <BlockWrapper
                className="bg-ca-surface-100 text-ca-surface-900"
                innerClassName="w-full"
            >
                <div className="flex justify-center">
                    <div className="flex flex-col max-w-sm">
                        <h2 className="text-ca-gray-900">Get in touch</h2>
                        <Divider className="divider-dark max-w-80" />
                        <p>
                            Want to get a faster response? Connect with me
                            through one of these platforms.
                        </p>
                        <SocialLinks
                            className="text-ca-gray-900"
                            socials={mainSocials}
                        />
                    </div>
                </div>
            </BlockWrapper>
            <LeanLeft />
        </>
    );
}
