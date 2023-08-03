import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 */
import './editor.scss';

export default function Edit() {
	return (
		<p { ...useBlockProps() }>
			{ __(
				'Crossfxn Blocks – hello from the editor!',
				'crossfxn-blocks'
			) }
		</p>
	);
}
