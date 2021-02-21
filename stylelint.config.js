module.exports = {
    extends: ['stylelint-config-recommended', 'stylelint-config-prettier'],
    // add your custom config here
    // https://stylelint.io/user-guide/configuration
    rules: {
        'at-rule-empty-line-before': ['always'],
        'rule-empty-line-before': ['always-multi-line'],
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['function', 'if', 'each', 'include', 'mixin'],
            },
        ],
    },
}
