module.exports = {
    "presets": ["@babel/preset-env", "@babel/preset-react"],
    "plugins": [
        ["@babel/plugin-proposal-object-rest-spread", { "loose": true, "useBuiltIns": true }],
        ["@babel/plugin-proposal-class-properties", { "loose": false }]
    ]
}