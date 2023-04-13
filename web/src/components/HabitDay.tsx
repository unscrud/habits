import * as Popover from '@radix-ui/react-popover'

// interface HabitDayProps {
//   completed: number
// }

export function HabitDay(/*props: HabitDayProps*/) {
  return (
    <Popover.Root>
      <Popover.Trigger className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg">
        <Popover.Portal>
          <Popover.Content className='min-w-[323px] p-6 rounded-2xl bg-zinc-900 flex flex-col'>
            <span className='font-semibold text-zinc-400'>Terça-Feira</span>
            <span className='mt-1 font-extrabold leading-tight text-3xl'>17/01</span>

            <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
              
              <div
                role='progressbar'
                aria-label='Progresso de hábitos completados'
                aria-valuenow={75}
                aria-aria-valuemin={0}
                aria-aria-valuemax={100}
                className='h-3 rounded-xl bg-violet-600 w-3/4' 
              />

            </div>

            <Popover.Arrow height={8} width={16} className='fill-zinc-900'/>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Trigger>
    </Popover.Root>
  )
}