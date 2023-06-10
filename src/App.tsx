import Forecast from "./components/Forecast"
import Search from "./components/Search"
import useForecast from "./hooks/useForecast"

const App = (): JSX.Element => {
  const { term, options, forecast, onInputChange, onOptionSelect, onSubmit } =
    useForecast()

  return (
    <main
      className={`flex items-center justify-center w-full py-0 bg-gradient-to-br from-[#6a80ff] via-[#87b5fa] to-[#b4e4f8] h-fit ${
        forecast && "md:py-3"
      }`}
    >
      {forecast ? (
        <Forecast data={forecast} />
      ) : (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      )}
    </main>
  )
}

export default App
