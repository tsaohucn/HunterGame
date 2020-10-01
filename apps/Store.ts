import { createContext } from 'react'
interface UidContextType {
  uid: string | undefined
}

const UidContext = createContext<UidContextType>({ uid: undefined })

export { UidContext }
