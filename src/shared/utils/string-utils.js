export const removeHtmlTags = (content) => {
    return content.replace(/<\/?[^>]+(>|$)/g, "");
}

export const trimContent = (content, maxLength) => {
    if (content.length <= maxLength) {
        return removeHtmlTags(content);
    }
    return removeHtmlTags(content).substring(0, maxLength) + "...";
};
