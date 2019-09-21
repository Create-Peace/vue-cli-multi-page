const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Index Page',
        },
        print: {
            entry: 'src/print/main.js',
            template: 'public/print.html',
            filename: 'print.html',
            title: 'print Page',
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'));
    },
    configureWebpack: {
        devServer: {
            historyApiFallback: {
                verbose: true,
                rewrites: [
                    { from: /^\/index\/.*$/, to: '/index.html'},
                    {from: /^\/print\/.*$/, to: '/print.html'}
                ]
            }
        }
    }
}
