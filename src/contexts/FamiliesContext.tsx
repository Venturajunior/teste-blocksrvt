import { ReactNode, createContext, useEffect, useState } from "react"
import { api } from "../lib/axios"

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
  noDupFamiliesArray: Family[]
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


  async function fetchFamilies({ skip = 0, take = 21 }: FetchProps) {
    const response = await api.get<Family[]>('/families', {
      params: {
        skip,
        take,
      }
    })
    setFamilies(state => [...state, ...response.data])
  }

  useEffect(() => {
    fetchFamilies({})
  }, [])

  const noDupFamiliesArray: Family[] = families.filter(
    (obj, index, self) => index === self.findIndex((o) => o.id === obj.id)
  );

  return (
    <FamiliesContext.Provider
      value={{
        families,
        noDupFamiliesArray,
        fetchFamilies
      }}
    >
      {children}
    </FamiliesContext.Provider >
  )
}

