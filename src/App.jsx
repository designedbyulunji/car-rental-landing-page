import "../universal-styles.scss";
import backgroudCar1 from "./assets/videos/supercar-blu.mp4";
import backgroudCar2 from "./assets/videos/supercar-blac.mp4";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
	return (
		<main className="app-global-main">
			{/* Background Video */}
			<video autoPlay muted>
				<source src={backgroudCar2} />
				<source src={backgroudCar1} />
			</video>

			{/* Components */}
			<Header />
			<Main />
		</main>
	);
}

export default App;
