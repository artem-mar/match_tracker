import { useEffect, useState } from 'react'
import Button from '../components/Button'
import AlertTriangle from '../icons/AlertTriangle'
import Refresh from '../icons/Refresh'
import { getMatches } from '../api/matches'
import { IMatch } from '../types'
import MatchCard from '../components/MatchCard'

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
    <div className='bg-background flex h-screen w-screen flex-col gap-5 overflow-y-auto p-11'>
      <div className='flex w-full items-center justify-between'>
        <h1 className='text-text-primary font-[Tactic] text-[32px] italic'>
          Match tracker
        </h1>
        <div className='flex gap-3'>
          {isError && (
            <div className='bg-bg-card text-text-primary flex items-center gap-2.5 rounded-sm px-6'>
              <AlertTriangle />
              <span className='font-[Inter] text-lg font-medium'>
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
            <Refresh className={isFetching ? 'animate-spin' : ''} />
          </Button>
        </div>
      </div>

      <section className='overflow-y flex flex-grow flex-col gap-3'>
        {matches.map(m => (
          <MatchCard key={m.title} match={m} />
        ))}
      </section>
    </div>
  )
}

export default MainPage
