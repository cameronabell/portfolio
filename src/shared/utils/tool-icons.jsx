import {
    SiAdobexd,
    SiAngular,
    SiAnsible,
    SiAxios,
    SiAzuredevops,
    SiCouchbase,
    SiFigma,
    SiHelm,
    SiKubernetes,
    SiNpm,
    SiNuget,
    SiMicrosoftsqlserver,
    SiPostman,
    SiReact,
    SiSketch,
    SiVisualstudio,
    SiVisualstudiocode,
    SiVite,
    SiMaterialdesign,
    SiMicrosoftazure,
    SiMicrosoftteams,
    SiJest,
    SiJenkins,
    SiJfrog,
    SiJira,
    SiAtlassian,
    SiMicrosoftsharepoint,
    SiMicrosoftvisio,
    SiLucid,
    SiMailchimp,
    SiWordpress,
    SiRedhat,
    SiRedhatopenshift,
    SiRedux,
    SiReactivex,
    SiReactquery,
    SiGithub,
    SiGithubactions,
    SiGithubcopilot,
    SiWindowsterminal,
    SiBrave,
    SiGooglemaps,
    SiGoogleanalytics,
    SiGmail,
    SiGooglecalendar,
    SiGooglebigquery,
    SiGooglecloud,
    SiGooglechrome,
    SiMicrosoftedge,
    SiFirefox,
    SiGoogledocs,
    SiGoogledrive,
    SiGoogleearth,
    SiGoogleforms,
    SiGooglehome,
    SiGooglemybusiness,
    SiGooglenews,
    SiGooglesheets,
    SiGoogleslides,
    SiFirebase,
    SiGrafana,
    SiCamunda,
    SiOpenai,
    SiAdobephotoshop,
    SiAdobeaftereffects,
    SiAdobepremierepro,
    SiAdobeillustrator,
    SiAdobecreativecloud,
    SiDavinciresolve,
    SiDatabricks,
    SiDocker,
    SiJasmine,
    SiSonarqube,
    SiObsstudio,
    SiStreamlabs,
    SiSwagger,
    SiCloudflare,
    SiCinema4D,
    SiBabel,
    SiAzureartifacts,
    SiHomeassistant,
} from "react-icons/si";

export const toolIcon = (tool) => {
    switch (tool?.toLowerCase()) {
        case "ansible":
            return <SiAnsible />;
        case "angular":
            return <SiAngular />;
        case "axios":
            return <SiAxios />;
        case "microsoft azure":
            return <SiMicrosoftazure />;
        case "azure devops":
            return <SiAzuredevops />;
        case "couchbase":
            return <SiCouchbase />;
        case "kubernetes":
            return <SiKubernetes />;
        case "helm":
            return <SiHelm />;
        case "react":
            return <SiReact />;
        case "vite":
            return <SiVite />;
        case "sketch":
            return <SiSketch />;
        case "figma":
            return <SiFigma />;
        case "adobe xd":
            return <SiAdobexd />;
        case "adobe photoshop":
            return <SiAdobephotoshop />;
        case "adobe after effects":
            return <SiAdobeaftereffects />;
        case "adobe premiere pro":
            return <SiAdobepremierepro />;
        case "adobe illustrator":
            return <SiAdobeillustrator />;
        case "adobe creative cloud":
            return <SiAdobecreativecloud />;
        case "davinci resolve":
            return <SiDavinciresolve />;
        case "postman":
            return <SiPostman />;
        case "visual studio":
        case "visual studio pro":
            return <SiVisualstudio />;
        case "visual studio code":
        case "vscode":
            return <SiVisualstudiocode />;
        case "sql server":
            return <SiMicrosoftsqlserver />;
        case "nuget":
            return <SiNuget />;
        case "npm":
            return <SiNpm />;
        case "material design":
            return <SiMaterialdesign />;
        case "microsoft teams":
            return <SiMicrosoftteams />;
        case "jest":
            return <SiJest />;
        case "jenkins":
            return <SiJenkins />;
        case "jfrog":
            return <SiJfrog />;
        case "jira":
            return <SiJira />;
        case "atlassian":
            return <SiAtlassian />;
        case "microsoft sharepoint":
            return <SiMicrosoftsharepoint />;
        case "microsoft visio":
            return <SiMicrosoftvisio />;
        case "lucid":
            return <SiLucid />;
        case "mailchimp":
            return <SiMailchimp />;
        case "wordpress":
            return <SiWordpress />;
        case "redhat":
            return <SiRedhat />;
        case "redhat openshift":
            return <SiRedhatopenshift />;
        case "redux":
            return <SiRedux />;
        case "reactivex":
        case "ngrx":
            return <SiReactivex />;
        case "react query":
            return <SiReactquery />;
        case "github":
            return <SiGithub />;
        case "github actions":
            return <SiGithubactions />;
        case "github copilot":
            return <SiGithubcopilot />;
        case "windows terminal":
            return <SiWindowsterminal />;
        case "brave":
            return <SiBrave />;
        case "google maps":
            return <SiGooglemaps />;
        case "google analytics":
            return <SiGoogleanalytics />;
        case "gmail":
            return <SiGmail />;
        case "google calendar":
            return <SiGooglecalendar />;
        case "google bigquery":
            return <SiGooglebigquery />;
        case "google cloud":
            return <SiGooglecloud />;
        case "google drive":
            return <SiGoogledrive />;
        case "google earth":
            return <SiGoogleearth />;
        case "google forms":
            return <SiGoogleforms />;
        case "google home":
            return <SiGooglehome />;
        case "google my business":
            return <SiGooglemybusiness />;
        case "google news":
            return <SiGooglenews />;
        case "google docs":
            return <SiGoogledocs />;
        case "google sheets":
            return <SiGooglesheets />;
        case "google slides":
            return <SiGoogleslides />;
        case "google chrome":
            return <SiGooglechrome />;
        case "firebase":
            return <SiFirebase />;
        case "grafana":
            return <SiGrafana />;
        case "microsoft edge":
            return <SiMicrosoftedge />;
        case "mozilla firefox":
            return <SiFirefox />;
        case "camunda":
            return <SiCamunda />;
        case "databricks":
            return <SiDatabricks />;
        case "openai":
            return <SiOpenai />;
        case "docker":
            return <SiDocker />;
        case "jasmine":
            return <SiJasmine />;
        case "sonarqube":
            return <SiSonarqube />;
        case "obs studio":
            return <SiObsstudio />;
        case "streamlabs":
            return <SiStreamlabs />;
        case "swagger":
            return <SiSwagger />;
        case "cloudflare":
            return <SiCloudflare />;
        case "cinema 4d":
            return <SiCinema4D />;
        case "babel":
            return <SiBabel />;
        case "azure artifcats":
            return <SiAzureartifacts />;
        case "home assistant":
            return <SiHomeassistant />;
        default:
            return;
    }
};
export default toolIcon;
