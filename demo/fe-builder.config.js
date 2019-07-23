const webpack=require('webpack')

const APIBASE = {
  develop: 'http://a.com',
  testing: 'http://b.com',
  staging: 'http://c.com',
  production: 'http://d.com',
};


const config={
  port:9000,
  useDll:false,
  webpackConfig:(originConfig,{args,nodeEnv,apiEnv})=>{

    // originConfig.plugins.push(
    //   //moment只加载中文，减少包体积
    //   new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(zh-cn)$/)
    // );

    originConfig.plugins.forEach(plugin => {
      if (plugin.constructor.name === 'DefinePlugin') {
        plugin.definitions['_APIBASE_'] = JSON.stringify(APIBASE[apiEnv])
      }
    });

    return originConfig;
  }
}

module.exports=config