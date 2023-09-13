import gulp from 'gulp';
import data from '../source/data.json' assert { type: 'json'};
import twig from 'gulp-twig';

const { src, dest } = gulp;

export function processMarkup () {
	return src('./source/pages/*.html')
		.pipe(twig({
			data: data
		}))
    .pipe(dest('./source'))
}
