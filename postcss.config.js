const autoprefixer = require("autoprefixer");

module.exports = () => ({
    ident: "postcss",
    plugins: {
        autoprefixer: {},
        "postcss-import": {},
        "postcss-nesting": {},
        "postcss-preset-env": {
            stage: 3,
            features: {
                "custom-media-queries": true,
            },
        },
    },
});
