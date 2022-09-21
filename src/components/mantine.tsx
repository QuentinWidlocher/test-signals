import {
	TextInput as MantineTextInput,
	Button as MantineButton,
} from "@mantine/core";
import merge from "lodash.merge";

type GetProps<C> = C extends React.ComponentType<infer Props> ? Props : never;

function overrideProps<
	Component,
	Props extends GetProps<Component> & {
		children?:
			| string
			| number
			| boolean
			| React.ReactElement<any, string | React.JSXElementConstructor<any>>
			| React.ReactFragment
			| React.ReactPortal
			| null
			| undefined
			| Array<
					| string
					| number
					| boolean
					| React.ReactElement<any, string | React.JSXElementConstructor<any>>
					| React.ReactFragment
					| React.ReactPortal
					| null
					| undefined
			  >;
	},
	OverridenProps extends Props
>(Component: Component, newProps: OverridenProps) {
	return (props: Props) => {
		let mergedProps = merge({}, props, newProps);
		// @ts-ignore
		if (mergedProps.children) {
			return (
				// @ts-ignore
				<Component {...mergedProps}>{mergedProps.children}</Component>
			);
		} else {
			// @ts-ignore
			return <Component {...mergedProps} />;
		}
	};
}

export const TextInput = overrideProps(MantineTextInput, {
	classNames: {
		input: "border-primary-500/25 focus:border-primary-500 rounded-md",
	},
});

type test = GetProps<typeof MantineButton>["children"];

export const Button = overrideProps(MantineButton, {
	classNames: {
		root: "bg-primary-500 rounded-md hover:bg-primary-600",
	},
});
