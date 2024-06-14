import { useEffect, useRef } from "react";
import { useAppSelector } from "../../hooks";

// ! Utility
//* Calculate distance squared of 2 points
const distancesq = (x1: number, y1: number, x2: number, y2: number) => {
	return Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2);
};

//* Calculate distance squared of 2 points
const getRandomSpeed = () => {
	return Math.random() * pointSpeed + pointSpeed * 2;
};

const getRandomDirection = () => {
	return Math.round(Math.random()) ? 1 : -1;
};

class Point {
	private originalX: number;
	private originalY: number;

	private active: boolean;

	private velocityX: number;
	private velocityY: number;

	// * Tracks the closest points
	closest: Point[];

	constructor(public x: number, public y: number, public index: number) {
		this.originalX = x;
		this.originalY = y;

		this.active = false;

		this.velocityX = getRandomSpeed() * getRandomDirection();
		this.velocityY = getRandomSpeed() * getRandomDirection();

		this.closest = [];
	}

	update = (
		context: CanvasRenderingContext2D,
		trackerX: number,
		trackerY: number,
		darkMode: boolean
	) => {
		// * Only move and display when near tracker radius
		const distance = distancesq(this.x, this.y, trackerX, trackerY);
		if (distance > Math.pow(radius, 2)) {
			this.active = false;
			return;
		} else {
			this.active = true;
		}

		// * Move point position
		this.x += this.velocityX;
		this.y += this.velocityY;

		// * Change direction of point when it hits a boundary
		if (this.x >= this.originalX + spaceBetweenPoints / 5) {
			this.velocityX = -getRandomSpeed();
		} else if (this.x < this.originalX - spaceBetweenPoints / 5) {
			this.velocityX = getRandomSpeed();
		}

		if (this.y >= this.originalY + spaceBetweenPoints / 5) {
			this.velocityY = -getRandomSpeed();
		} else if (this.y < this.originalY - spaceBetweenPoints / 5) {
			this.velocityY = getRandomSpeed();
		}

		this.getClosestPoints();
		this.drawLines(context, darkMode);
	};

	getClosestPoints = () => {
		const closestPoints: Point[] = [];

		points.forEach((point) => {
			if (point !== this && point.active) {
				if (closestPoints.length < 3) {
					// * Push new closest point
					closestPoints.push(point);
				} else {
					let farthestPointIndex = 0;

					// * Update farthest point
					closestPoints.forEach((_, index) => {
						if (
							distancesq(
								this.x,
								this.y,
								closestPoints[index].x,
								closestPoints[index].y
							) >
							distancesq(
								this.x,
								this.y,
								closestPoints[farthestPointIndex].x,
								closestPoints[farthestPointIndex].y
							)
						) {
							farthestPointIndex = index;
						}
					});

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
		});

		this.closest = [...closestPoints];
	};

	// * Draw lines to closest points
	drawLines = (context: CanvasRenderingContext2D, darkMode: boolean) => {
		for (const point of this.closest) {
			// * Check if the line has already been drawn
			let hasDrawn = false;
			for (const point2 of point.closest) {
				if (point2.index === this.index) {
					if (point.index < this.index) {
						hasDrawn = true;
						break;
					}
				}
			}

			if (!hasDrawn) {
				context.beginPath();
				context.moveTo(this.x, this.y);
				context.lineTo(point.x, point.y);

				if (darkMode) {
					context.strokeStyle = `rgba(${darkModeColor.red}, ${darkModeColor.green}, ${darkModeColor.blue}, ${lineOpacity})`;
				} else {
					context.strokeStyle = `rgba(${lightModeColor.red}, ${lightModeColor.green}, ${lightModeColor.blue}, ${lineOpacity})`;
				}

				context.stroke();
			}
		}
	};
}

class Tracker {
	x: number;
	y: number;

	constructor(
		private velocityX: number,
		private velocityY: number,
		canvasWidth: number,
		canvasHeight: number
	) {
		this.x = Math.random() * canvasWidth;
		this.y = Math.random() * canvasHeight;
	}

	update = (canvasWidth: number, canvasHeight: number) => {
		this.x += this.velocityX;
		this.y += this.velocityY;

		// * Change direction when it hits a boundary
		if (this.x >= canvasWidth) {
			this.velocityX = -Math.abs(this.velocityX);
		}

		if (this.x < 0) {
			this.velocityX = Math.abs(this.velocityX);
		}

		if (this.y >= canvasHeight) {
			this.velocityY = -Math.abs(this.velocityY);
		}

		if (this.y < 0) {
			this.velocityY = Math.abs(this.velocityY);
		}
	};
}

// * Resize canvas whenever window is resized
const resize = (canvas: HTMLCanvasElement) => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
};

const initialize = (canvas: HTMLCanvasElement) => {
	// * Initialize tracker
	tracker = new Tracker(
		trackerVelocityX,
		trackerVelocityY,
		canvas.width,
		canvas.height
	);

	// * Populates all points
	let index = 0;
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
			points.push(new Point(posX, posY, index));

			index++;
		}
	}
};

const points: Point[] = [];
let tracker: Tracker | null = null;

// ! Config
const radius = 750;
const spaceBetweenPoints = 250;
const pointSpeed = 0.02;

const trackerVelocityX = 0.2;
const trackerVelocityY = 0.2;

const lineOpacity = 0.15;
const lightModeColor = { red: 0, green: 0, blue: 0 };
const darkModeColor = { red: 255, green: 255, blue: 255 };

let canvasRendered = false;
let animateOn = false;
let dark = false;

const BackgroundCanvas = () => {
	const canvasMode = useAppSelector((state) => state.system.canvasMode);
	dark = useAppSelector((state) => state.system.darkMode);

	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		let startAnimateAgain = false;
		if (animateOn === false && canvasMode === true) {
			startAnimateAgain = true;
		}
		animateOn = canvasMode;

		if (canvasRef.current) {
			const canvas = canvasRef.current;
			const context = canvas!.getContext("2d");

			if (context === null) {
				return;
			}

			// * Funct to animate canvas
			const animate = () => {
				context.clearRect(0, 0, canvas.width, canvas.height);

				tracker?.update(canvas.width, canvas.height);

				points.forEach((point) =>
					point.update(context, tracker!.x, tracker!.y, dark)
				);

				if (animateOn) {
					requestAnimationFrame(animate);
				}
			};

			if (startAnimateAgain) {
				resize(canvas);
				animate();
			}

			// *  canvas has been rendered, do not rerender
			if (canvasRendered) {
				return;
			}
			canvasRendered = true;

			// * Initialize canvas
			window.addEventListener("resize", () => {
				resize(canvas);
			});
			initialize(canvas);
		}
	});

	return (
		<div className="fixed top-0 left-0 h-full w-full bg-white dark:bg-neutral-700">
			{canvasMode ? (
				<canvas
					className="bg-transparent h-full w-full"
					ref={canvasRef}
				/>
			) : null}
		</div>
	);
};

export default BackgroundCanvas;
