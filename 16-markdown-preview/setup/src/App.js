import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdown, setMarkdown] = useState('# markdown preview');

  return (
    <div className='markdown'>
      <textarea
        className='input'
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      >

      </textarea>
      <div className='result'>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  )
}

export default App
