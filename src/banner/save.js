import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ 'Crossfxn Blocks – hello from the saved content!' }
		</p>
	);
}
