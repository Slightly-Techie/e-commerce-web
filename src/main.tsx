import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App.tsx"
import AlertProvider from "./components/AlertProvider.tsx"
import CustomApolloProvider from "./components/CustomApolloProvider.tsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CustomApolloProvider>
        <AlertProvider />
        <App />
      </CustomApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
