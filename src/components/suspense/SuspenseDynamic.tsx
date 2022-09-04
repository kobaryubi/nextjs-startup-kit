import { FC } from 'react'

const SuspenseDynamic: FC = () => {
  return (
    <ul>
      {Array(1000).fill({}).map((_, index) => (
        <li key={index}>{index}</li>
      ))}
    </ul>
  )
}

export default SuspenseDynamic
