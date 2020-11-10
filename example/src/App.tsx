import React from 'react'

import { DataGrid } from 'data-grid'
// import './base.less'
// import 'data-grid/dist/index.css'

const App = () => {
  const greetings = [
    { id: 1, category: 'green', hi: 'there' },
    { id: 2, category: 'green', hi: 'world' },
    { id: 3, category: 'green', hi: 'user' },
    { id: 4, category: 'green', hi: 'subject' },
    { id: 5, category: 'green', hi: 'universe' },
    { id: 6, category: 'green', hi: 'there' },
    { id: 7, category: 'green', hi: 'world' },
    { id: 8, category: 'green', hi: 'user' },
    { id: 9, category: 'green', hi: 'subject' },
    { id: 10, category: 'blue', hi: 'universe' },
    { id: 11, category: 'blue', hi: 'there' },
    { id: 12, category: 'blue', hi: 'world' },
    { id: 13, category: 'blue', hi: 'user' },
    { id: 14, category: 'blue', hi: 'subject' },
    { id: 15, category: 'blue', hi: 'universe' },
    { id: 16, category: 'blue', hi: 'there' },
    { id: 17, category: 'blue', hi: 'world' },
    { id: 18, category: 'blue', hi: 'user' },
    { id: 19, category: 'blue', hi: 'subject' },
    { id: 20, category: 'blue', hi: 'universe' },
  ]
  return <DataGrid
    label="Simple Data Grid Example 😄"
    data={greetings}
    headers={{ hi: 'Hey', category: 'Hue' }}
    // selectionKey='id'
  />
}

export default App
