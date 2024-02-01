module.exports = {
    "extends": [
        "stylelint-config-recommended-scss",
        "stylelint-prettier/recommended",
    ],
    "rules": {
        "font-family-no-missing-generic-family-keyword": [true, {
            "ignoreFontFamilies": ["Material Icons"],
        }],
        "no-descending-specificity": null, // TODO
        "scss/no-global-function-names": null, // Need to update the webpack config
    }
}
