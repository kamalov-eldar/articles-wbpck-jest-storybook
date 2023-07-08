import webpack from 'webpack';
import { IBuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildLoaders } from './buildLoaders';
import path from 'path';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: IBuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options;
    return {
        mode: mode, // development
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: buildPlugins(options),
        resolve: buildResolvers(),
        module: {
            rules: buildLoaders(),
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
