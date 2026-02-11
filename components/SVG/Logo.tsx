export default function Logo({ className }: { className: string }) {
  return (
    <img
      src="/logo.png"
      className={className}
      width={48}
      height={48}
      alt="Logo Image"
    />
  )
}
