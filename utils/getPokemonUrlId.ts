/**
 * @description This function converts a URL with number ID
 * @param url Pokemon URL
 * @returns { number } Pokemon ID
 */
export const getPokemonUrlId = (url?: string) => url?.split("/")[6]