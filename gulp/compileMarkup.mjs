import gulp from 'gulp';

import twig from 'gulp-twig';

const { src, dest } = gulp;

export function processMarkup () {
	return src('./source/pages/*.html')
		.pipe(twig({

		}))
    .pipe(dest('./source'))
}
