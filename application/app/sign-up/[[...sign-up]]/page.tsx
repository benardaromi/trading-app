import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='grid w-dvw h-dvh place-content-center'>
      <SignUp />
    </div>
  )
}