import React from 'react'
import ReactDOM from 'react-dom/client'
import KitchenSinkMantine from './kitchen-sink'

import presetTailwind from '@twind/preset-tailwind'
import { setup } from 'twind'

const tailwind = presetTailwind()

setup({
  presets: [tailwind],
  theme: {
    extend: {
      colors: {
        // @ts-ignore
        primary: tailwind.theme.colors.indigo,
        // @ts-ignore
        danger: tailwind.theme.colors.red,
        // @ts-ignore
        neutral: tailwind.theme.colors.slate,
      },
    },
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <KitchenSinkMantine />
  </React.StrictMode>
)
