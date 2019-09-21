# multi-page

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```

重要是的是在vue.config.js中添加
```js
configureWebpack: {
        devServer: {
            historyApiFallback: {
                rewrites: [
                    { from: /^\/index\/.*$/, to: '/index.html'},
                    {from: /^\/print\/.*$/, to: '/print.html'}
                ]
            }
        }
    }
```
