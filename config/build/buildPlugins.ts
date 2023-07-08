import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import { IBuildOptions } from './types/config';

export function buildPlugins({ paths }: IBuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
            title: 'Development',
        }),
        new webpack.ProgressPlugin(),
        // применять изменения только при горячей перезагрузке
        // new webpack.HotModuleReplacementPlugin(),
    ];
}
