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
import "./index.css";
import LanderPage from "./pages/LanderPage";

// const duration = 300;

// const defaultStyle = {
// 	transition: `opacity ${duration}ms ease-in-out`,
// 	opacity: 0,
// };

// const transitionStyles = {
// 	entering: { opacity: 1 },
// 	entered: { opacity: 1 },
// 	exiting: { opacity: 0 },
// 	exited: { opacity: 0 },
// };

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />}>
			<Route index={true} element={<LanderPage />} />
			<Route path="about" element={<AboutMePage />} />
			<Route path="projects" element={<ProjectsPage />} />
			<Route path="resume" element={<ResumePage />} />
			<Route path="contact" element={<ContactMePage />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
