import Link from "next/link";
import { CardanoWallet } from "@meshsdk/react";

export default function Navbar() {
  return (
    <div className="bg-white z-50 fixed w-full">
      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <>
                    <span className="sr-only">Logo</span>
                    <img
                      className="h-8 w-auto"
                      src="/ada.webp"
                      alt="logo"
                    />
                  </>
                </Link>
              </div>

              <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  <span className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                    <Link href="/collection">COLLECTIONS</Link>
                  </span>
                </div>
              </div>

              <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  <span className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                    <Link href="/guide">GUIDE</Link>
                  </span>
                </div>
              </div>


              <div className="ml-auto flex items-center">
                <div className="hidden lg:ml-8 lg:flex">
                  <a
                    href="#"
                    className="flex items-center text-gray-700 hover:text-gray-800"
                  >
                    <img
                      src="/ada.webp"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">ADA</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
                <div className="ml-auto flex items-center">
                  <CardanoWallet />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
