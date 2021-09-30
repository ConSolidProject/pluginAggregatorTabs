const {merge} = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')
const commonConfig = require('./webpack.common')

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/microfrontends/projectManager/dist/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'projectManager',
            filename: 'remoteEntry.js',
            exposes: {
                './ProjectManager': './src/bootstrap'
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig)