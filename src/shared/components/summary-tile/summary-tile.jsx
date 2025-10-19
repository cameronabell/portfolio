import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { trimContent } from "shared";

export const SummaryTile = ({ title, content, slug, featuredImage }) => {
    const navigate = useNavigate();
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const header = featuredImage && (
        <h3 className="px-4 pt-4">
            <Button
                link
                className="text-ca-gray-100 hover:text-ca-pink-500 text-2xl p-0"
                label={title}
                icon="pi pi-arrow-right"
                onClick={() => navigate("projects/" + slug)}
            />
        </h3>
    );
    const sectionContent = <p>{trimContent(content, 150)}</p>;
    const footer = (
        <div className="flex p-4 justify-end">
            <Button
                label="Read More"
                icon="pi pi-arrow-right"
                onClick={() => navigate("projects/" + slug)}
                className="p-button-text"
            />
        </div>
    );
    return (
        <section className="bg-ca-gray-900 flex flex-col rounded-lg overflow-hidden">
            <img
                src={featuredImage}
                alt={title}
                className="max-w-[23.625rem] h-auto cursor-pointer transition-transform transform hover:scale-105 duration-500"
                onLoad={() => handleImageLoad()}
                onClick={() => navigate("projects/" + slug)}
            />
            {imageLoaded && (<>
                {header}
                <div className="px-4 grow">
                    <Divider />
                    {sectionContent}
                </div>
                {footer}
            </>)}
        </section>
    );
}