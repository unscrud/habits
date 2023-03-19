import './styles/global.css'
import { Header } from './components/Header'
import { SummaryTable } from './components/SummaryTable'
//import { Habit } from "./components/Habit"

export function App() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <Header />
      <SummaryTable />
    </div>
  )
}

