#!/usr/bin/env node

import yargs from "yargs";
import webpack from "webpack";
import webpackConfig from './webpackConfig'
import WebpackDevServer from 'webpack-dev-server'

const { argv } = yargs
  .scriptName("simple")
  .usage("Usage:$0 <command>")
  .demand(1) //至少需要一个参数
  .command(["dev", "d"], "this is for develop model!", {}, () => {
    console.log("dev");
    new WebpackDevServer(webpack(webpackConfig)).listen(3001,'127.0.0.1')
  })
  .command(["pro", "p"], "build for production model", {}, () => {
    console.log("pro");



    const compiler = webpack(webpackConfig);

    compiler.run((err, stats) => {
      console.log("build production model done!!!");
    });
  })
  .command(["init", "i"], "init the project", {}, () => {
    console.log("init");
  })
  .help();
