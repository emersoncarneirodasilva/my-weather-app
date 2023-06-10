import { ChangeEvent, useEffect, useState } from "react"
import { OptionType, ForecastType } from "../types"

const useForecast = () => {
  const [term, setTerm] = useState<string>("")
  const [options, setOptions] = useState<[]>([])
  const [city, setCity] = useState<OptionType | null>(null)
  const [forecast, setForecast] = useState<ForecastType | null>(null)

  function getSearchOptions(value: string) {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
        process.env.REACT_APP_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setOptions(data))
      .catch((error) => console.error(error))
  }

  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.trim()
    setTerm(value)

    if (value === "") {
      return
    }

    getSearchOptions(value)
  }

  function getForecast(city: OptionType) {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const forecastData = { ...data.city, list: data.list.slice(0, 16) }

        setForecast(forecastData)
      })
      .catch((error) => console.error(error))
  }

  function onSubmit() {
    if (!city) {
      return
    }

    getForecast(city)
  }

  function onOptionSelect(option: OptionType) {
    setCity(option)
  }

  useEffect(() => {
    if (city) {
      setTerm(city.name)
      setOptions([])
    }
  }, [city])

  return {
    term,
    options,
    forecast,
    onInputChange,
    onOptionSelect,
    onSubmit,
  }
}

export default useForecast
