import Image, { ImageProps } from 'next/image'

type ImageBWProps = Omit<ImageProps, 'className' | 'fill'> & {
  className?: string
}

export default function ImageBW({ className = '', sizes = '100vw', ...props }: ImageBWProps) {
  return <Image fill sizes={sizes} className={`img-bw ${className}`.trim()} {...props} />
}
