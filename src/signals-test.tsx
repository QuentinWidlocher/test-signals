import { Signal, useComputed, useSignal } from "@preact/signals-react";
import { TextInput } from "./components/mantine";

export function FastComponentWithSignals({ label }: { label: Signal<string> }) {
	return <div>{label.value}</div>;
}

export function SlowComponentWithSignals({ label }: { label: Signal<string> }) {
	// waste time
	for (let i = 0; i < 100000000; i++) {}

	return <div>{label.value}</div>;
}

export function InputsWithSignals({
	firstName,
	lastName,
}: {
	firstName: Signal<string>;
	lastName: Signal<string>;
}) {
	return (
		<>
			<TextInput
				label="First name"
				value={firstName.value}
				onChange={(e) => (firstName.value = e.currentTarget.value)}
			/>
			<TextInput
				label="Last name"
				value={lastName.value}
				onChange={(e) => (lastName.value = e.currentTarget.value)}
			/>
		</>
	);
}

export function LabelsWithSignals({
	firstName,
	lastName,
}: {
	firstName: Signal<string>;
	lastName: Signal<string>;
}) {
	let fullName = useComputed(() => `${firstName} ${lastName}`);

	return (
		<>
			<div className="flex space-x-2">
				<strong>Your full name is : </strong>
				<FastComponentWithSignals label={fullName} />
			</div>
			<div className="flex">
				<strong>Your last name is : </strong>
				<SlowComponentWithSignals label={lastName} />
			</div>
		</>
	);
}

export function TestWithSignals() {
	let firstName = useSignal("");
	let lastName = useSignal("");

	return (
		<>
			<InputsWithSignals firstName={firstName} lastName={lastName} />
			<LabelsWithSignals firstName={firstName} lastName={lastName} />
		</>
	);
}
