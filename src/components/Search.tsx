import { ChangeEvent } from "react"
import { OptionType } from "../types"

type Props = {
  term: string
  options: []
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onOptionSelect: (option: OptionType) => void
  onSubmit: () => void
}

const Search = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props): JSX.Element => {
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-[#6a80ff] via-[#87b5fa] to-[#b4e4f8] h-[100vh] w-full">
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-zinc-700">
        <h1 className="text-4xl font-thin">
          Weather <span className="font-black">Forecast</span>
        </h1>

        <p className="mt-2 text-sm">
          Enter below a place you want to know the weather of and select an
          option from the dropdown
        </p>

        <div className="relative flex mt-10 md:mt-4">
          <input
            type="text"
            value={term}
            onChange={onInputChange}
            className="px-2 py-1 border-2 border-white rounded-l-md"
          />

          <ul className="absolute ml-1 bg-white top-9 rounded-b-md">
            {options.map((option: OptionType, index: number) => (
              <li key={option.name + "-" + index}>
                <button
                  className="w-full px-2 py-1 text-sm text-left cursor-pointer hover:bg-zinc-700 hover:text-white"
                  onClick={() => onOptionSelect(option)}
                >
                  {option.name}, {option.country}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="px-2 py-1 transition-all duration-200 border-2 cursor-pointer rounded-r-md border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100"
            onClick={onSubmit}
          >
            Search
          </button>
        </div>
      </section>
    </main>
  )
}

export default Search
