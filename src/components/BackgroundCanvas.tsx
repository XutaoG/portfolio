import { useEffect, useRef } from "react";
import { useAppSelector } from "../hooks";

// * Utility: Calculate distance squared of 2 points
const distancesq = (x1: number, y1: number, x2: number, y2: number) => {
	return Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2);
};

class Point {
	private originalX: number;
	private originalY: number;

	private radius: number;
	private active: boolean;
	// private size: number;

	private opacity: number;

	private directionX: number;
	private directionY: number;

	private speedX: number;
	private speedY: number;

	private closest: Point[];

	constructor(
		public x: number,
		public y: number,
		private context: CanvasRenderingContext2D,
		private tracker: Tracker
	) {
		this.originalX = x;
		this.originalY = y;

		this.radius = radius;
		this.active = true;

		// this.size = Math.random() * 4 + 5;
		this.opacity = startingOpacity;

		this.directionX = Math.round(Math.random()) ? 1 : -1;
		this.directionY = Math.round(Math.random()) ? 1 : -1;

		this.speedX = Math.random() * speedRange + startingSpeed;
		this.speedY = Math.random() * speedRange + startingSpeed;

		this.closest = [];
	}

	update = () => {
		this.x += this.speedX * this.directionX;
		this.y += this.speedY * this.directionY;

		// * Change direction of point when it hits a boundary
		if (
			this.x >= this.originalX + spaceBetweenPoints / 4 ||
			this.x < this.originalX - spaceBetweenPoints / 4
		) {
			this.speedX = Math.random() * speedRange + startingSpeed;
			this.directionX *= -1;
		}

		if (
			this.y >= this.originalY + spaceBetweenPoints / 4 ||
			this.y < this.originalY - spaceBetweenPoints / 4
		) {
			this.speedY = Math.random() * speedRange + startingSpeed;
			this.directionY *= -1;
		}

		const distance = distancesq(
			this.x,
			this.y,
			this.tracker.x,
			this.tracker.y
		);

		// * Only display when near tracker radius
		if (distance > Math.pow(this.radius, 2)) {
			this.active = false;
			return;
		} else {
			this.active = true;
		}

		// * Set new opacity
		this.opacity = startingOpacity;
		if (distance <= Math.pow(200, 2)) {
			this.opacity -= 0.01;
		}
		if (distance <= Math.pow(100, 2)) {
			this.opacity -= 0.01;
		}
		if (distance <= Math.pow(50, 2)) {
			this.opacity -= 0.01;
		}

		// * Perform update
		this.getClosestPoints();
		this.drawLines();
		this.draw();
	};

	getClosestPoints = () => {
		if (!this.active) {
			return;
		}

		const closestPoints = [];

		for (const point of points) {
			if (point !== this && point.active) {
				if (closestPoints.length < 3) {
					// * Push new closest point
					closestPoints.push(point);
				} else {
					let farthestPointIndex = 0;

					// * Update farthest point
					for (let i = 1; i < closestPoints.length; i++) {
						if (
							distancesq(
								this.x,
								this.y,
								closestPoints[i].x,
								closestPoints[i].y
							) >
							distancesq(
								this.x,
								this.y,
								closestPoints[farthestPointIndex].x,
								closestPoints[farthestPointIndex].y
							)
						) {
							farthestPointIndex = i;
						}
					}

					if (
						distancesq(this.x, this.y, point.x, point.y) <
						distancesq(
							this.x,
							this.y,
							closestPoints[farthestPointIndex].x,
							closestPoints[farthestPointIndex].y
						)
					) {
						closestPoints[farthestPointIndex] = point;
					}
				}
			}
		}

		this.closest = [...closestPoints];
	};

	// * Draw all lines connected to the point
	drawLines = () => {
		for (const point of this.closest) {
			this.drawLineTo(point);
		}
	};

	// * Draw points
	draw = () => {
		if (darkMode) {
			this.context.fillStyle = `rgba(${darkModeColor.red}, ${darkModeColor.green}, ${darkModeColor.blue}, ${this.opacity})`;
		} else {
			this.context.fillStyle = `rgba(${lightModeColor.red}, ${lightModeColor.green}, ${lightModeColor.blue}, ${this.opacity})`;
		}
		// this.context.beginPath();
		// this.context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		// this.context.fill();
	};

	drawLineTo = (point: Point) => {
		this.context.beginPath();
		this.context.moveTo(this.x, this.y);
		this.context.lineTo(point.x, point.y);

		if (darkMode) {
			this.context.strokeStyle = `rgba(${darkModeColor.red}, ${darkModeColor.green}, ${darkModeColor.blue}, ${this.opacity})`;
		} else {
			this.context.strokeStyle = `rgba(${lightModeColor.red}, ${lightModeColor.green}, ${lightModeColor.blue}, ${this.opacity})`;
		}

		this.context.stroke();
	};

	setNewContext = (context: CanvasRenderingContext2D) => {
		this.context = context;
	};
}

class Tracker {
	x: number;
	y: number;

	constructor(
		private velocityX: number,
		private velocityY: number,
		private canvas: HTMLCanvasElement
	) {
		this.x = Math.random() * canvas.width;
		this.y = Math.random() * canvas.height;
	}

	update = () => {
		this.x += this.velocityX;
		this.y += this.velocityY;

		// * Change direction when it hits a boundary
		if (this.x >= this.canvas.width) {
			this.velocityX = Math.abs(this.velocityX) * -1;
		}

		if (this.x < 0) {
			this.velocityX = Math.abs(this.velocityX);
		}

		if (this.y >= this.canvas.height) {
			this.velocityY = Math.abs(this.velocityY) * -1;
		}

		if (this.y < 0) {
			this.velocityY = Math.abs(this.velocityY);
		}
	};
}

// * Stores all points on canvas
const points: Point[] = [];
let tracker: Tracker | null = null;
let canvasRendered = false;
let animateOn = false;

// ! Config
const radius = 500;
const spaceBetweenPoints = 200;
const speedRange = 0.03;
const startingSpeed = 0.05;

const trackerVelocityX = 0.25;
const trackerVelocityY = 0.25;

// ! Cosmetic Config
const startingOpacity = 0.2;
const lightModeColor = { red: 24, green: 24, blue: 24 };
const darkModeColor = { red: 220, green: 220, blue: 220 };
let darkMode: boolean;

interface backgroundCanvasProps {
	dark: boolean;
}

const BackgroundCanvas = ({ dark }: backgroundCanvasProps) => {
	const canvasMode = useAppSelector((state) => state.system.canvasMode);

	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		darkMode = dark;

		let startAnimateAgain = false;
		if (animateOn === false && canvasMode === true) {
			startAnimateAgain = true;
		}
		animateOn = canvasMode;

		if (canvasRef.current) {
			const canvas = canvasRef.current;
			const context = canvas!.getContext("2d");

			// * If context do not exist or
			if (context === null) {
				return;
			}

			// * Funct to animate canvas
			const animate = () => {
				context.clearRect(0, 0, canvas.width, canvas.height);

				tracker?.update();

				points.forEach((point) => point.update());

				if (animateOn) {
					requestAnimationFrame(animate);
				}
			};

			// * Func to resize canvas whenever window is resized
			const resize = () => {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			};

			if (startAnimateAgain) {
				// * Update all point context
				points.forEach((point) => point.setNewContext(context));
				resize();
				animate();
			}

			// *  canvas has been rendered, do not rerender
			if (canvasRendered) {
				return;
			}
			canvasRendered = true;

			// * Initialize tracker
			tracker = new Tracker(trackerVelocityX, trackerVelocityY, canvas);

			resize();
			window.addEventListener("resize", resize);

			// * Populates all points
			for (
				let x = -spaceBetweenPoints / 2;
				x < canvas.width + spaceBetweenPoints / 2;
				x += spaceBetweenPoints
			) {
				for (
					let y = -spaceBetweenPoints / 2;
					y < canvas.height + spaceBetweenPoints / 2;
					y += spaceBetweenPoints
				) {
					const posX = x + Math.random() * spaceBetweenPoints * 0.75;
					const posY = y + Math.random() * spaceBetweenPoints * 0.75;
					points.push(new Point(posX, posY, context, tracker));
				}
			}
			resize();
			animate();
		}
	});

	return (
		<div className="fixed top-0 left-0 h-full w-full bg-white dark:bg-neutral-700">
			{/* {canvasMode ? (
				<canvas
					className="bg-transparent h-full w-full"
					ref={canvasRef}
				/>
			) : null} */}
		</div>
	);
};

export default BackgroundCanvas;
