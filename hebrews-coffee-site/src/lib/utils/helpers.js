export function uppercaseComplexString(name) {
    return name.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
}