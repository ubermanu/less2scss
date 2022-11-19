import { Command } from 'commander';
import { version } from '../package.json' assert { type: 'json' };
import { less2scss } from './less2scss';

const program = new Command();

program
    .name('less2scss')
    .description('This utility quickly converts all your less files to scss.')
    .version(version, '-v, --version', 'Output the current version.')
    .helpOption('-h, --help', 'Show this command summary.')
    .option('-s, --src <sourcePaths>', 'comma separated source paths')
    .option('-d, --dst <dstPath>', 'destination path')
    .option('-e, --exclude <excludePaths>', 'comma separated exclude paths')
    .option('-r, --recursive', 'allow to recursively walk directories', false);

program.parse(process.argv);

const exec = () => {
    const opts = program.opts();
    const { src, dst, exclude, recursive } = opts;
    if (src) {
        less2scss(src, dst, recursive, exclude);
    } else {
        program.outputHelp();
    }
};

exec();
