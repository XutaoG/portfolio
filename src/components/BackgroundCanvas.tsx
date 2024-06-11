import { useEffect, useRef } from "react";

// * Utility: Calculate distance squared of 2 points
const distancesq = (x1: number, y1: number, x2: number, y2: number) => {
	return Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2);
};

// * Stores all points on canvas
const points: Point[] = [];
let canvasRendered: boolean = false;

// ! Config
const radiusFactor = 10;
const spaceFactor = 8;
const speedRange = 0.03;
const startingSpeed = 0.05;

const trackerVelocityX = 0.25;
const trackerVelocityY = 0.25;

// ! Cosmetic Config
const startingOpacity = 0.2;
const lightModeColor = { red: 24, green: 24, blue: 24 };
const darkModeColor = { red: 220, green: 220, blue: 220 };
let darkMode: boolean;

class Point {
	private originalX: number;
	private originalY: number;

	private radius: number;
	private active: boolean;
	private size: number;

	opacity: number;

	private directionX: number;
	private directionY: number;

	private speedX: number;
	private speedY: number;

	private closest: Point[];

	constructor(
		public x: number,
		public y: number,
		private canvas: HTMLCanvasElement,
		private context: CanvasRenderingContext2D,
		private tracker: Tracker
	) {
		this.originalX = x;
		this.originalY = y;

		this.radius = (canvas.width / spaceFactor) * radiusFactor;
		this.active = true;

		this.size = Math.random() * 4 + 5;
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
			this.x >= this.originalX + this.canvas.width / spaceFactor / 8 ||
			this.x < this.originalX - this.canvas.width / spaceFactor / 8
		) {
			this.speedX = Math.random() * speedRange + startingSpeed;
			this.directionX *= -1;
		}

		if (
			this.y >= this.originalY + this.canvas.height / spaceFactor / 8 ||
			this.y < this.originalY - this.canvas.height / spaceFactor / 8
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
			this.opacity -= 0.025;
		}
		if (distance <= Math.pow(100, 2)) {
			this.opacity -= 0.025;
		}
		if (distance <= Math.pow(50, 2)) {
			this.opacity -= 0.025;
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
				if (closestPoints.length < 4) {
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
		this.context.beginPath();
		this.context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		this.context.fill();
	};

	drawLineTo = (point: Point) => {
		const lineOpacity =
			this.opacity > point.opacity ? this.opacity : point.opacity;

		this.context.beginPath();
		this.context.moveTo(this.x, this.y);
		this.context.lineTo(point.x, point.y);

		if (darkMode) {
			this.context.strokeStyle = `rgba(${darkModeColor.red}, ${darkModeColor.green}, ${darkModeColor.blue}, ${lineOpacity})`;
		} else {
			this.context.strokeStyle = `rgba(${lightModeColor.red}, ${lightModeColor.green}, ${lightModeColor.blue}, ${lineOpacity})`;
		}

		this.context.stroke();
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
		this.x = canvas.width / 3;
		this.y = canvas.height / 3;
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

interface backgroundCanvasProps {
	dark: boolean;
}

const BackgroundCanvas = ({ dark }: backgroundCanvasProps) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	darkMode = dark;

	useEffect(() => {
		if (canvasRef.current) {
			const canvas = canvasRef.current;
			const context = canvas!.getContext("2d");

			if (context === null || canvasRendered) {
				return;
			}

			// * Set color mode
			canvasRendered = true;

			// * Initialize tracker
			const tracker = new Tracker(
				trackerVelocityX,
				trackerVelocityY,
				canvas
			);

			// * Resize canvas whenever window is resized
			const resize = () => {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			};
			resize();
			window.addEventListener("resize", resize);

			// * Populates all points
			for (
				let x = -canvas.width / spaceFactor;
				x < canvas.width + canvas.width / spaceFactor;
				x += canvas.width / spaceFactor
			) {
				for (
					let y = -canvas.height / spaceFactor;
					y < canvas.height + canvas.height / spaceFactor;
					y += canvas.height / spaceFactor
				) {
					const posX =
						x + (Math.random() * canvas.width) / spaceFactor;
					const posY =
						y + (Math.random() * canvas.height) / spaceFactor;
					points.push(
						new Point(posX, posY, canvas, context, tracker)
					);
				}
			}

			// * Animate canvas
			const animate = () => {
				context.clearRect(0, 0, canvas.width, canvas.height);

				tracker.update();

				points.forEach((point) => point.update());
				requestAnimationFrame(animate);
			};

			animate();
		}
	});

	return (
		<canvas
			className="fixed top-0 left-0 bg-transparent h-full w-full bg-white dark:bg-neutral-700"
			ref={canvasRef}
		/>
	);
};

export default BackgroundCanvas;
