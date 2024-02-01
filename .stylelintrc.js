module.exports = {
    "extends": [
        "stylelint-config-recommended-scss",
        "stylelint-prettier/recommended",
    ],
    "rules": {
        "font-family-no-missing-generic-family-keyword": [true, {
            "ignoreFontFamilies": ["Inter", "Material Icons"],
        }],
        "no-descending-specificity": null, // TODO
        "scss/at-import-partial-extension": null, // Cannot build with this rule
        "scss/comment-no-empty": null, // Lot of empty comment in boostrap reboot file
        "scss/no-global-function-names": null, // May need to update some build config
    }
}
