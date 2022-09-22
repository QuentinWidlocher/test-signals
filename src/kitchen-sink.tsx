import { useSignal } from '@preact/signals-react'
import { Button, Switch, TextInput } from './components/mantine'

export default function KitchenSinkMantine() {
  let inputsInError = useSignal(false)

  return (
    <main className="flex w-screen h-screen justify-center items-center">
      <div className="w-full  p-5">
        <h1 className="text-xl">Kitchen Sink Mantine</h1>
        <h2 className="mt-5 text-lg">Buttons</h2>
        <section className="bg-slate-100 p-5 rounded-lg shadow-sm grid grid-cols-6 gap-5">
          <Button>Default</Button>
          <Button variant="filled">Filled</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="light">Light</Button>
          <Button variant="subtle">Subtle</Button>
          <Button variant="white">White</Button>

          <Button color="primary">Primary</Button>
          <Button color="blue">Blue</Button>
          <Button color="purple">Purple</Button>
          <Button color="pink">Pink</Button>
          <Button color="amber">Amber</Button>
          <Button color="green">Green</Button>

          <Button compact>Compact</Button>
          <Button size="xs">Extra small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra large</Button>
        </section>
        <div className="mt-5 flex items-center justify-between">
          <h2 className="text-lg">Inputs </h2>
          <Switch
            label="Error"
            checked={inputsInError.value}
            onChange={(e) => (inputsInError.value = e.currentTarget.checked)}
          />
        </div>
        <section className="bg-slate-100 p-5 rounded-lg shadow-sm grid grid-cols-6 gap-5">
          <TextInput
            error={inputsInError.value ? 'Error: invalid' : false}
            variant="default"
            placeholder="Default"
          />
          <TextInput
            error={inputsInError.value ? 'Error: invalid' : false}
            variant="filled"
            placeholder="Filled"
          />
          <TextInput
            error={inputsInError.value ? 'Error: invalid' : false}
            variant="unstyled"
            placeholder="Unstyled"
          />
        </section>
      </div>
    </main>
  )
}
