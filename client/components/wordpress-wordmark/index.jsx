/** @format */

/**
 * External dependencies
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class WordPressWordmark extends PureComponent {
	static displayName = 'WordPressWordmark';

	static defaultProps = {
		width: 112,
		height: 12,
		className: 'wpcom-wordmark',
	};

	static propTypes = {
		width: PropTypes.number,
		height: PropTypes.number,
		className: PropTypes.string,
	};

	render() {
		return (
			<svg
				className={ this.props.className }
				width={ this.props.width }
				height={ this.props.height }
				viewBox="0 0 112 12"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g fill="#FFF" fillRule="evenodd">
					<path
						d={
							'M35.64 3.08c-.495-.116-1-.18-1.51-.19-2.77 0-4.28 1.85-4.28 4.55 0 2.7 1.51 3.92 3.29' +
							' 3.92.952-.044 1.864-.395 2.6-1v.75h1.9V-.21h-2v3.29zm0 5.76c-.492.54-1.172.868-1.9.92-1.1' +
							' 0-1.82-.73-1.82-2.44s.88-2.82 2.41-2.82c.448.004.892.09 1.31.25v4.09zm73.55-5.94c-1' +
							' .105-1.953.486-2.75 1.1l-.24.15c-.407-.83-1.28-1.324-2.2-1.25-.992.072-1.944.42-2.75' +
							' 1v-.8h-1.9v8.06h2V5.38c.622-.45 1.355-.728 2.12-.8.66 0 1.07.36 1.07 1.49v5.09h2V5.39c.622-.453' +
							' 1.354-.733 2.12-.81.66 0 1.07.36 1.07' +
							' 1.49v5.09h2V5.6c.066-.706-.174-1.407-.66-1.924-.486-.516-1.17-.8-1.88-.776zM12.57-.21L10.3' +
							' 8.5 8-.21H5.75l.53 1.87-2 7.14-2.17-9h-2.2L3' +
							' 11.17h2.4l1.85-6.08L9 11.17h2.4L14.64-.21h-2.07zM93.65 2.9c-2.77 0-4.07 1.78-4.07 4.24s1.31' +
							' 4.23 4.07 4.23c2.76 0 4.07-1.77 4.07-4.23 0-2.46-1.32-4.24-4.07-4.24zm0' +
							' 6.86c-1.31 0-2-.85-2-2.61 0-1.76.7-2.61 2-2.61s2 .85 2 2.61c0 1.76-.65 2.61-2 2.61zM18.46' +
							' 2.9c-2.77 0-4.07 1.78-4.07 4.24s1.31 4.23 4.07 4.23c2.76 0 4.07-1.77 4.07-4.23' +
							' 0-2.46-1.32-4.24-4.07-4.24zm0 6.86c-1.31 0-2-.85-2-2.61 0-1.76.7-2.61 2-2.61s2 .85 2 2.61c0' +
							' 1.76-.69 2.61-2 2.61zm7.62-5.33H26V3.1h-1.85v8.06h2v-4.8c.45-1.054 1.53-1.694' +
							' 2.67-1.58H29V3h-.54c-1.01-.048-1.95.516-2.38 1.43zM43.84-.21h-3.72v11.38h2.14v-4h1.57c2.43 0' +
							' 4.19-1.31 4.19-3.75S46.26-.21 43.84-.21zm0 5.76h-1.58V1.47h1.59c.543-.066 1.085.126' +
							' 1.466.52.38.39.556.94.474 1.48 0 1.24-.6 2.08-1.94 2.08h-.01zm29.29-.19c0-.61.66-.85' +
							' 1.38-.85.76.016 1.514.137 2.24.36V3.2c-.777-.22-1.582-.324-2.39-.31-1.94 0-3.29.92-3.29 2.41 0' +
							' 2.9 4 2.16 4 3.57 0 .7-.63.88-1.54.88-.83-.055-1.648-.226-2.43-.51v1.65c.75.3 1.55.463 2.36.48' +
							' 1.88 0 3.68-.56 3.68-2.58.01-2.79-4-2.07-4-3.43h-.01zm-7.29 0c0-.61.66-.85 1.38-.85.76.016' +
							' 1.514.137 2.24.36V3.2c-.777-.22-1.582-.324-2.39-.31-1.94 0-3.29.92-3.29 2.41 0 2.9 4 2.16 4' +
							' 3.57 0 .7-.63.88-1.54.88-.83-.055-1.648-.226-2.43-.51v1.65c.75.3 1.55.463 2.36.48 1.88 0' +
							' 3.68-.56 3.68-2.58.01-2.79-4-2.07-4-3.43h-.01zm12.62 5.81h2V9.09h-2v2.08zM58.91' +
							' 2.9c-1.09-.012-2.135.435-2.88 1.233-.743.797-1.117 1.87-1.03 2.957 0 3 1.58 4.28 4.14 4.28' +
							' 1.018.007 2.03-.15' +
							' 3-.46V9.25c-.767.307-1.584.473-2.41.49-1.49 0-2.49-.41-2.54-2.17h5.11c.048-.395.07-.792.07-1.19' +
							'.08-.94-.26-1.87-.925-2.54-.666-.67-1.593-1.014-2.535-.94zm-1.75' +
							' 3.34c.12-1.12.73-1.83 1.73-1.83s1.39.85 1.39 1.83h-3.12zm26.55.81c0-1.88 1-2.53' +
							' 2.26-2.53.77.022 1.532.178 2.25.46V3.29c-.73-.264-1.503-.396-2.28-.39-1.16-.093-2.303.324-3.13' +
							' 1.142-.83.82-1.26 1.957-1.18 3.118 0 2.5 1.19 4.21 4.19 4.21.854-.01 1.7-.165' +
							' 2.5-.46V9.25c-.712.304-1.476.47-2.25.49-1.33' +
							' 0-2.36-.61-2.36-2.68v-.01zm-32.5-2.62h-.07V3.1h-1.86v8.06h2v-4.8c.45-1.054' +
							' 1.53-1.694 2.67-1.58h.2V3h-.54c-1.017-.056-1.966.51-2.4 1.43z'
						}
					/>
				</g>
			</svg>
		);
	}
}
