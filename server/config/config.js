/*--------------- [Start Server Config ----------------------]*/
var config = { 
    development: {
        database: 'mongodb://202.129.207.230:27017/MyOffice',
        node_secure: false,
        // prefix_api: '/api'
        sdf_prefix: 'http://25.27.7.151:21300',
        proxy_target: 'http://202.129.207.230:3000',
        proxy_root: '/entro/MyOffice',
        proxy_rewrite: {
        '^/entro/MyOffice': ''
        },
      //  web_port: 4200,
      //  app_port: 3000
  },
};

/* ------------- [START SERVER GET FUNTION] ------------ */
exports.get = function get(env) {
  return  config.development;
};
/* ------------- [END SERVER GET FUNTION] ------------ */