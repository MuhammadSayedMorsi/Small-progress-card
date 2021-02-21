const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
    lintOnSave: true,
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "@/scss/_needed.scss";`,
            },
        },
    },
    configureWebpack: {
        plugins: [
            new StyleLintPlugin({
                files: ['./src/**/*.vue'],
                fix: true,
            }),
        ],
    },
}
