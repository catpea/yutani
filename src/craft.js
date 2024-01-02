// Boot Script - this is a boot sctipt that gets all the non-symmetrical oddities out of the way

import bootstrapCss from 'bootstrap/dist/css/bootstrap.min.css';
import bootstrapJs from 'bootstrap/dist/js/bootstrap.bundle.min.js';


import setup from './setup.js';
import usage from './usage.js';

import Application from './application/Application.js';
const application = new Application();

setup(application);
application.start();

usage(application.Api)
