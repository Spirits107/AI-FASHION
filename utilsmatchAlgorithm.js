module.exports = (outfits, bodyType, size, preferences, weather) => {
    return outfits.filter(outfit =>
        outfit.bodyTypes.includes(bodyType) &&
        outfit.sizes.includes(size) &&
        (weather ? outfit.weather.includes(weather) : true) &&
        preferences.some(p => outfit.styles.includes(p))
    );
};
