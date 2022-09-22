import {
  TextInput as MantineTextInput,
  Button as MantineButton,
  Switch as MantineSwitch,
} from '@mantine/core'

type GetProps<C> = C extends React.ComponentType<infer Props> ? Props : never

export function TextInput(props: GetProps<typeof MantineTextInput>) {
  let inputStyle = 'rounded-md'
  let color = props.color ?? 'primary'

  switch (props.variant) {
    case 'default':
      inputStyle += ` border-neutral-300 !border-${color}-500(focus:& active:&)`
      break

    case 'filled':
      inputStyle += ` bg-neutral-200 !border-${color}-500(focus:& active:&)`
      break

    default:
      break
  }

  return (
    <>
      <MantineTextInput
        {...props}
        classNames={{
          input: `${inputStyle} ${props.classNames?.input ?? ''}`,
          invalid: `!border-danger-500 ${props.classNames?.error ?? ''}`,
        }}
      />
    </>
  )
}

export function Switch(props: GetProps<typeof MantineSwitch>) {
  return (
    <MantineSwitch
      {...props}
      classNames={{
        track: `peer:checked:bg-primary-500 ${props.classNames?.input ?? ''}`,
      }}
    />
  )
}

export function Button(props: GetProps<typeof MantineButton>) {
  let rootStyle = 'rounded-md'
  let color = props.color ?? 'primary'
  let variant = props.variant ?? 'filled'

  switch (variant) {
    case 'filled':
      rootStyle += ` bg-${color}-500 hover:bg-${color}-600`
      break

    case 'outline':
      rootStyle += ` border border-${color}-500 hover:bg-${color}-500/10 text-${color}-500`
      break

    case 'light':
      rootStyle += ` bg-(${color}-500/20 hover:${color}-500/25) text-${color}-500`
      break

    case 'subtle':
      rootStyle += ` hover:bg-${color}-500/20 text-${color}-500`
      break

    case 'white':
      rootStyle += ` bg-white hover:bg-gray-100 text-${color}-500`
      break

    default:
      break
  }

  return (
    <>
      <MantineButton
        {...props}
        variant={variant}
        classNames={{
          root: `${rootStyle} ${props.classNames?.root ?? ''}`,
        }}
      />
    </>
  )
}
