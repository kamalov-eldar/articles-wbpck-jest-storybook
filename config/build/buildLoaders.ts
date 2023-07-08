import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {
    // порядок Loders в массиве  имеет значение
    const typescriptLoader = {
        test: /\.(?:js|ts)x?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    return [typescriptLoader];
}
