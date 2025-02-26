import { useEffect, useState } from "react"
import Button from "../components/Button"
import AlertTriangle from "../icons/AlertTriangle"
import Refresh from "../icons/Refresh"
import { getMatches } from "../api/matches"
import { IMatch } from "../types"
import MatchCard from "../components/MatchCard"

const MainPage = () => {
  const [isError, setError] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
  const [matches, setMatches] = useState<IMatch[]>([])

  const fetchMatches = async () => {
    setIsFetching(true)
    try {
      const {
        data: { matches },
      } = await getMatches()
      setError(false)
      setMatches(matches)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (er) {
      setError(true)
    } finally {
      setIsFetching(false)
    }
  }

  useEffect(() => {
    fetchMatches()
  }, [])

  return (
    <div className='p-11 w-screen h-screen bg-background flex flex-col gap-5 overflow-y-auto'>
      <div className='w-full flex justify-between items-center'>
        <h1 className='text-text-primary italic font-[Tactic] text-[32px]'>Match tracker</h1>
        <div className='flex gap-3'>
          {isError && (
            <div className='flex items-center gap-2.5 px-6 rounded-sm bg-bg-card text-text-primary'>
              <AlertTriangle />
              <span className='font-[Inter] font-medium text-lg'>
                Ошибка: не удалось загрузить информацию
              </span>
            </div>
          )}
          <Button
            props={{
              onClick: fetchMatches,
              disabled: isFetching,
            }}
          >
            Обновить
            <Refresh className={isFetching ? "animate-spin" : ""} />
          </Button>
        </div>
      </div>

      <section className='flex-grow flex flex-col gap-3 overflow-y'>
        {matches.map((m) => (
          <MatchCard key={m.title} match={m} />
        ))}
      </section>
    </div>
  )
}

export default MainPage
