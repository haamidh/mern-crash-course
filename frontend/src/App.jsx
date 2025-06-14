import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import CreatePage1 from "./pages/CreatePage1";

function App() {
	return (
		<Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
			<Navbar />
			<Routes>
				{/* <Route path='/' element={<HomePage />} /> */}
				<Route path='/create' element={<CreatePage1 />} />
			</Routes>
		</Box>
	);
}

export default App;
