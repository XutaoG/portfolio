import { MouseEvent, useEffect, useRef } from "react";

// * Utility: Calculate distance squared of 2 points
const distancesq = (x1: number, y1: number, x2: number, y2: number) => {
	return Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2);
};

// * Stores all points on canvas
const points: Point[] = [];

// * Track mouse movement
const mousePosition = { x: 0, y: 0 };

// ! Config
const radiusFactor = 2;
const spaceFactor = 20;
const speedRange = 0.1;
const startingSpeed = 0.1;
const trackerVelocityX = 0.25;
const trackerVelocityY = 0.75;

class Point {
	private originalX: number;
	private originalY: number;

	private radius: number;
	private active: boolean;
	private size: number;
	private lineOpacity: number;

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

		this.size = Math.random() * 5 + 2;
		this.lineOpacity = 0.1;

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
			this.x >= this.originalX + this.canvas.width / spaceFactor / 2 ||
			this.x < this.originalX - this.canvas.width / spaceFactor / 2
		) {
			this.speedX = Math.random() * speedRange + startingSpeed;
			this.directionX *= -1;
		}

		if (
			this.y >= this.originalY + this.canvas.height / spaceFactor / 2 ||
			this.y < this.originalY - this.canvas.height / spaceFactor / 2
		) {
			this.speedY = Math.random() * speedRange + startingSpeed;
			this.directionY *= -1;
		}

		// * Only display when hover mouse over
		if (
			distancesq(this.x, this.y, this.tracker.x, this.tracker.y) >
			Math.pow(this.radius, 2)
		) {
			this.active = false;
			return;
		} else {
			this.active = true;
		}

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
		const distance = distancesq(
			this.x,
			this.y,
			mousePosition.x,
			mousePosition.y
		);
		if (distance <= Math.pow(200, 2)) {
			this.lineOpacity = 0.1;
		}

		if (distance <= Math.pow(100, 2)) {
			this.lineOpacity = 0.15;
		}

		if (distance <= Math.pow(50, 2)) {
			this.lineOpacity = 0.2;
		}

		this.context.fillStyle = `rgba(173, 233, 240, 0.8)`;
		this.context.beginPath();
		this.context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		this.context.fill();
	};

	drawLineTo = (point: Point) => {
		const distance = distancesq(
			mousePosition.x,
			mousePosition.y,
			point.x,
			point.y
		);
		let opacity = this.lineOpacity;

		if (distance <= Math.pow(50, 2)) {
			opacity -= 0.025;
		}

		if (distance <= Math.pow(100, 2)) {
			opacity -= 0.025;
		}

		if (distance <= Math.pow(200, 2)) {
			opacity -= 0.025;
		}

		this.context.beginPath();
		this.context.moveTo(this.x, this.y);
		this.context.lineTo(point.x, point.y);
		this.context.strokeStyle = `rgba(173, 233, 240, ${opacity})`;
		this.context.stroke();
	};
}

class Tracker {
	x = 100;
	y = 100;

	constructor(
		private velocityX: number,
		private velocityY: number,
		private canvas: HTMLCanvasElement
	) {}

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

const BackgroundCanvas = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (canvasRef.current) {
			const canvas = canvasRef.current;
			const context = canvas!.getContext("2d");

			if (context === null) {
				return;
			}

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

				// * Draw mouse position (To be removed)
				context.fillStyle = `rgba(173, 233, 240, 0.5)`;
				context.beginPath();
				context.arc(
					mousePosition.x,
					mousePosition.y,
					5,
					0,
					Math.PI * 2
				);
				context.fill();

				points.forEach((point) => point.update());
				requestAnimationFrame(animate);
			};

			animate();
		}
	}, []);

	// * Update mouse position as cursor moves
	const onCanvasMouseMove = (event: MouseEvent) => {
		mousePosition.x = event.clientX;
		mousePosition.y = event.clientY;
	};

	return (
		<canvas
			className="fixed top-0 left-0 bg-transparent h-full w-full bg-white dark:bg-neutral-700"
			ref={canvasRef}
			onMouseMove={onCanvasMouseMove}
		/>
	);
};

export default BackgroundCanvas;
