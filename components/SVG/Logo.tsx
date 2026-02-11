import Image from "next/image"

export default function Logo({ className }: { className: string }) {
  return (
    <Image
      src="/logo.png"
      className={className}
      width={48}
      height={48}
      alt="Logo Image"
    />
  )
}
