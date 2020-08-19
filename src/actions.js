export const LISTEN = "LISTEN";
export const FAV = "FAV";
export const FILTER = "FILTER";
export const filter = text => ({
    type:FILTER,
    filter:text
})
export const listen = song => ({
    'type': LISTEN,
    'song': song
})
export const fav = song => ({
    'type': FAV,
    'song': song
})