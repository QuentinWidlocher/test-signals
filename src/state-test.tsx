import { useState } from "react";
import { TextInput } from "./components/mantine";

export function FastComponentWithState({ label }: { label: string }) {
	return <span>{label}</span>;
}

export function SlowComponentWithState({ label }: { label: string }) {
	// waste time
	for (let i = 0; i < 100000000; i++) {}

	return <span>{label}</span>;
}

export function InputsWithState({
	firstName,
	onFirstNameChange,
	lastName,
	onLastNameChange,
}: {
	firstName: string;
	onFirstNameChange: (value: string) => void;
	lastName: string;
	onLastNameChange: (value: string) => void;
}) {
	return (
		<>
			<TextInput
				label="First name"
				value={firstName}
				onChange={(e) => onFirstNameChange(e.currentTarget.value)}
			/>
			<TextInput
				label="Last name"
				value={lastName}
				onChange={(e) => onLastNameChange(e.currentTarget.value)}
			/>
		</>
	);
}

export function LabelsWithState({
	firstName,
	lastName,
}: {
	firstName: string;
	lastName: string;
}) {
	let fullName = `${firstName} ${lastName}`;

	return (
		<>
			<div className="flex space-x-2">
				<strong>Your full name is : </strong>
				<FastComponentWithState label={fullName} />
			</div>
			<div className="flex">
				<strong>Your last name is : </strong>
				<SlowComponentWithState label={lastName} />
			</div>
		</>
	);
}

export function TestWithStates() {
	let [firstName, setFirstName] = useState("");
	let [lastName, setLastName] = useState("");

	return (
		<>
			<InputsWithState
				firstName={firstName}
				onFirstNameChange={setFirstName}
				lastName={lastName}
				onLastNameChange={setLastName}
			/>
			<LabelsWithState firstName={firstName} lastName={lastName} />
		</>
	);
}
