export const getEnvVar = (key) => {
    // @ts-ignore
    const value = import.meta.env[key];
    if (!value) {
        console.error(`No environment variable found for key: ${key}`);
    }
    return value;
}
