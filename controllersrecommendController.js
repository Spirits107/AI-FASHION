const outfits = require('../data/outfits.json');
const matchAlgorithm = require('../utils/matchAlgorithm');

exports.generateRecommendations = (req, res) => {
    const { bodyType, size, preferences, weather } = req.body;

    const recommendations = matchAlgorithm(outfits, bodyType, size, preferences, weather);
    res.json({ recommendations });
};
