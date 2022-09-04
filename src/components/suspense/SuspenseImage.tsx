import { FC } from 'react'

type Props = {
  src: string
}

let hasLoaded = false

const SuspenseImage: FC<Props> = ({ src }) => {
  if (!hasLoaded) {
    throw new Promise<void>((resolve) => {
      const image = new Image()
      image.src = src
      image.onload = () => {
        hasLoaded = true
        resolve()
      }
    })
  }

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt="" />
}

export default SuspenseImage
