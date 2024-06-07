import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import ContactMePage from "./pages/ContactMePage";
import {
	Navigate,
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Root from "./pages/Root";
import { Fragment } from "react/jsx-runtime";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />}>
			<Route index={true} element={<AboutMePage />} />
			<Route path="projects" element={<ProjectsPage />} />
			<Route path="resume" element={<ResumePage />} />
			<Route path="contact" element={<ContactMePage />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Route>
	)
);

function App() {
	return (
		<Fragment>
			<RouterProvider router={router} />
			{/* <div id="modal-container"></div> */}
		</Fragment>
	);
}

export default App;
