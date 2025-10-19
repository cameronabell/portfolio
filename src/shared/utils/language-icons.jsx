import {
    SiC,
    SiCplusplus,
    SiCsharp,
    SiCss3,
    SiCsswizardry,
    SiDotenv,
    SiDotnet,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiJson,
    SiNodedotjs,
    SiSass,
    SiSwift,
    SiTailwindcss,
    SiTerraform,
    SiTypescript,
    SiVisualbasic,
    SiYaml,
} from "react-icons/si";
import { PiFileSql } from "react-icons/pi";

export const languageIcon = (language) => {
    switch (language?.toLowerCase()) {
        case "c#":
        case "csharp":
            return <SiCsharp />;
        case "javascript":
            return <SiJavascript />;
        case "html":
            return <SiHtml5 />;
        case "css":
            return <SiCsswizardry />;
        case "css3":
            return <SiCss3 />;
        case "sass":
            return <SiSass />;
        case "tailwindcss":
            return <SiTailwindcss />;
        case "typescript":
            return <SiTypescript />;
        case "terraform":
            return <SiTerraform />;
        case "yaml":
            return <SiYaml />;
        case "git":
            return <SiGit />;
        case "vb":
        case "visual basic":
            return <SiVisualbasic />;
        case "sql":
            return <PiFileSql />;
        case "nodejs":
            return <SiNodedotjs />;
        case "c":
            return <SiC />;
        case "cplusplus":
        case "c++":
            return <SiCplusplus />;
        case "dotenv":
            return <SiDotenv />;
        case "dotnet":
            return <SiDotnet />;
        case "swift":
            return <SiSwift />;
        case "json":
            return <SiJson />;
        default:
            return;
    }
};
