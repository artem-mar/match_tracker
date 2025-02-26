import { api } from '.'
import { IMatch } from '../types'

interface IResponse {
  data: { matches: IMatch[] }
  ok: boolean
}

export const getMatches = async (): Promise<IResponse> => {
  try {
    const { data } = await api.get('/fronttemp')
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}
