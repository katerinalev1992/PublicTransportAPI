#!/usr/bin/env node

import {TransportAPIImpl} from "./routes/TransportAPIImpl";
import StopInfo from "./models/StopInfo";

const program = require('commander');
const {prompt} = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'stopId',
        message: 'Enter stop id'
    }
];

program
    .version('0.0.1')
    .description('Transport API');

program
    .command('getAllStopInfo')
    .alias('a')
    .description('Return array of StopInfo')
    .action(() => {
        prompt(questions).then((answers: any) => {
            const transportAPIImpl = new TransportAPIImpl();
            transportAPIImpl.getAllStopInfo(answers.stopId).then((stopInfo: StopInfo) => {
                console.log(stopInfo);
                process.exit(0);
            }).catch()
        });

    });

program
    .command('getAllStopInfo2 <name>')
    .alias('all')
    .description('Return array of StopInfo')
    .action((name: any )=> {
        const transportAPIImpl = new TransportAPIImpl();
        transportAPIImpl.getAllStopInfo(name).then((stopInfo: StopInfo) => {
            console.log(stopInfo);
            process.exit(0);
        }).catch()
    });


if (!process.argv.slice(2).length/* || !/[arudl]/.test(process.argv.slice(2))*/) {
    program.outputHelp();
    process.exit()
}
program.parse(process.argv);