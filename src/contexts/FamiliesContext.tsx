import { ReactNode, createContext, useCallback, useEffect, useState } from "react"
import { api } from "../lib/axios"
import { parseArray } from "../utils/parseArray"

interface Family {
  id: string
  details: {
    name: string
    description: string
  }
  premium: boolean
}

interface FamilyContextType {
  families: Family[]
  fetchFamilies: (props: FetchProps) => Promise<void>
}

interface FamiliesProviderProps {
  children: ReactNode
}

interface FetchProps {
  skip?: number;
  take?: number
}

export const FamiliesContext = createContext({} as FamilyContextType)

export function FamiliesProvider({ children }: FamiliesProviderProps) {
  const [families, setFamilies] = useState<Family[]>([]);


  const fetchFamilies = useCallback(async ({ skip = 0, take = 21 }: FetchProps) => {
    const response = await api.get<Family[]>('/families', {
      params: {
        skip,
        take,
      }
    })
    setFamilies(state => parseArray([...state, ...response.data]))
  }, [])

  useEffect(() => {
    fetchFamilies({})
  }, [fetchFamilies])

  return (
    <FamiliesContext.Provider
      value={{
        families,
        fetchFamilies
      }}
    >
      {children}
    </FamiliesContext.Provider >
  )
}

