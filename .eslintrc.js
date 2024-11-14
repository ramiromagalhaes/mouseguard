module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:svelte/recommended"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["svelte"],
    overrides: [
        {
            files: ["*.svelte"],
            excludedFiles: "node_modules/**/*"
        }
    ],
    rules: {
        "no-undef": "off"
    }
};
