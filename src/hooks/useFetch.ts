import { useEffect, useState } from "react"

const useFetch = (url: string) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<any>()
  const [error, setError] = useState(false)

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const fetchedData = await fetch(url)
        if (fetchedData.ok) {
          return setData(await fetchedData.json())
        }

        throw Error
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    handleFetch()
  }, [url])
  return { data, error, loading }
}
export default useFetch
