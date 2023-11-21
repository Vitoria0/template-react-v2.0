import React, { useState } from 'react';
import './style.scss';

const Card3D = ({ dataImage, header, content }) => {
	// Estado do mouse
	const [mouseState, setMouseState] = useState({ x: 0, y: 0 });
	const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null);

	// Manipuladores de eventos
	const handleMouseMove = e => {
		const card = e.target;
		const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = card;
		const mouseX = e.pageX - offsetLeft - offsetWidth;
		const mouseY = e.pageY - offsetTop - offsetHeight;

		setMouseState({ x: mouseX, y: mouseY });
	};

	const handleMouseEnter = () => {
		clearTimeout(mouseLeaveDelay);
	};

	const handleMouseLeave = () => {
		const delay = setTimeout(() => {
			setMouseState({ x: 0, y: 0 });
		}, 1000);
		setMouseLeaveDelay(delay);
	};

	// Estilos do cartão
	const cardTransform = {
		// transform: `rotateY(${(mouseState.x / 360) * -10}deg) rotateX(${(mouseState.y / 360) * -30}deg)`,
	};

	const cardBgTransform = {
		transform: `translateX(${(mouseState.x / 240) * -20}px) translateY(${(mouseState.y / 320) * -50}px)`,
	};

	const cardBgImage = {
		backgroundImage: `url(${dataImage})`,
        backgroundPosition:'center',
	};

	return (
		<div
			className='card-wrap'
			onMouseMove={handleMouseMove}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div className='card' style={cardTransform}>
				<div className='card-bg' style={{ ...cardBgTransform, ...cardBgImage }}></div>
			</div>
		</div>
	);
};

export default Card3D;
