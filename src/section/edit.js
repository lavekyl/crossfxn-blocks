import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 */
import './editor.scss';

export default function Edit({attributes, setAttributes}) {

	const blockProps = useBlockProps({className: 'crossfxn-section font-bold'});

	return (
		<div { ...blockProps }>
			<RichText
					tagName="h2" // The tag here is the element output and editable in the admin
					value={ attributes.content } // Any existing content, either from the database or an attribute default
					allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
					onChange={ ( content ) => setAttributes( { content } ) } // Store updated content as a block attribute
					placeholder={ __( 'Enter your banner text...' ) } // Display this text before any content has been added by the user
			/>
		</div>
	);
}
