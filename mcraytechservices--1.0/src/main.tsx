import { FormspreeProvider } from "@formspree/react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
	<FormspreeProvider project={import.meta.env.VITE_FORMSPREE_PROJECT}>
		<App />
	</FormspreeProvider>
);
