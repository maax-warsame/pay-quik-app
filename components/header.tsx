import Link from "next/link"
import Image from "next/image"
export function Header() {
  return (
    <header className="w-full bg-transparent z-10 pt-3">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-center px-4">
        <Link href="/">
          <div className="flex items-center justify-center">
            {/* Logo mask: uses CSS mask to paint a white fill behind logo pixels without a white rectangle */}
            <div className="logo-mask">
              <Image src={'/logo.png'} alt="Pay-quik Logo" height={250} width={250} sizes="250" />
            </div>
          </div>
        </Link>
      </div>
    </header>
  )
}
