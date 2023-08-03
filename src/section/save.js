import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({attributes}) {
	const blockProps = useBlockProps.save({
		className: "crossfxn-section font-bold"
	})
	return (
		<div { ...blockProps }>
			<RichText.Content 
				tagName="h2"
				value={attributes.content}
			/>
		</div>
	);
}
