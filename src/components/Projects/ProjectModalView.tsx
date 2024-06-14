import Button from "../Reusable/Button";

const ProjectModalView = () => {
	return (
		<div className="flex flex-col gap-1 w-min">
			<div className="w-[800px] h-[500px] flex border border-neutral-400"></div>
			{/* Title */}
			<div className="flex justify-between items-start">
				<div>
					<p className="ibm-plex-mono font-semibold text-lg">
						PORTFOLIO
					</p>
					<p className="ibm-plex-mono text-neutral-600 dark:text-neutral-400">
						FULL STACK APPLICATION
					</p>
				</div>
				<p className="anonymous-pro">2024</p>
			</div>
			{/* Action */}
			<div className="flex justify-end gap-3">
				<Button text="/code" textFont="ibm-plex-mono" />
			</div>
			{/* Description */}
			<div>
				<p className="ibm-plex-mono font-bold">Description</p>
				<p className="crimson-text">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Sunt, repellendus distinctio. Eius nostrum tempora nulla
					excepturi fugiat amet nihil inventore magni dolor recusandae
					fuga totam tenetur quidem error deserunt enim, impedit
					dolores.
				</p>
			</div>
			{/* Technologies */}
			<div>
				<p className="ibm-plex-mono font-bold">Technologies Used</p>
				<ul className="list-disc pl-6 crimson-text">
					<li>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Magnam, soluta.
					</li>
					<li>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</li>
					<li>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Laudantium illum praesentium necessitatibus! Laboriosam
						voluptatum eaque eius, incidunt nihil ipsum cumque!.
					</li>
					<li>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Pariatur nemo corrupti minus commodi!
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ProjectModalView;
