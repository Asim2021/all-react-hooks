import { useState, useEffect } from 'react'

const Custom = (url) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [url])

  return [data]
}

export default Custom

// Hooks are reusable functions. Custom Hooks start with "use" .Example: useFetch.

//
