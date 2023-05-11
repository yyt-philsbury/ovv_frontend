module.exports = {
  apps: [
    {
      // Primary is what will run CRON jobs
      // can use process.env.name to access this
      name: 'ovv_fe_1',
      // We run the transpiled version to avoid transpiling
      // all instances to javascript on dev mode
      // So basically because the code is in TS, we can't
      // really use --watch for hot reloading because the
      // the transpiling on multiple instances is resource intensive
      script: 'npm',
      args: 'start',
      instances: '1',
      exec_mode: 'cluster',
    },
  ],
};

