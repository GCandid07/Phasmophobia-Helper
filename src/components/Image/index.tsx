import Image from 'next/image'

type IconProps = {
  src: string
  alt: string
  priority?: boolean
  width?: number
  height?: number
} & React.ImgHTMLAttributes<HTMLImageElement>

export const ImageIcon = ({
  src,
  alt,
  className = '',
  priority = false,
  width,
  height,
  ...rest
}: IconProps) => {
  return (
    <Image
      {...rest}
      className={` ${className} `}
      width={width || 1}
      height={height || 1}
      alt={alt}
      src={src}
      loading="eager"
      priority={priority}
    />
  )
}
