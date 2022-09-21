import { useComputed, useSignal } from "@preact/signals-react";
import { Button } from "./components/mantine";
import { TestWithSignals } from "./signals-test";
import { TestWithStates } from "./state-test";

function App() {
	let tab = useSignal<"signals" | "states">("signals");
	let theOtherTab = useComputed(() => {
		return tab.value == "signals" ? "states" : "signals";
	});

	let TestComponent = useComputed(() => {
		return tab.value == "signals" ? TestWithSignals : TestWithStates;
	});

	return (
		<main className="flex w-screen h-screen justify-center items-center">
			<div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 space-y-5">
				<h1 className="text-xl">
					Testing with <strong>{tab.value}</strong>
				</h1>
				<h2 className="opacity-50">
					Warning : displaying the last name takes a LOT of time
				</h2>
				{tab.value == "states" ? (
					<h2 className="text-red-500 opacity-75">
						Testing with states also mean that you'll render the last name even
						if you only change the first name, so it will always be slow
					</h2>
				) : null}
				<TestComponent.value />
				<hr />
				<TestComponent.value />
				<hr />
				<Button
					className="w-full"
					onClick={() => (tab.value = theOtherTab.value)}
				>
					Test with {theOtherTab.value} instead
				</Button>
			</div>
		</main>
	);
}

export default App;
