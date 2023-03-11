import { StatusBar } from "expo-status-bar";
import { Home } from "./src/screens/Home/homeView";
import './src/lib/dayjs/config'

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Home />
    </>
  )
}
