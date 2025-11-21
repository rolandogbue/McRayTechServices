import { FormspreeProvider } from "@formspree/react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
	<FormspreeProvider project="2859294668909182031">
		<App />
	</FormspreeProvider>
);
