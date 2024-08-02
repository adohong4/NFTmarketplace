export default function Footer() {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://meshjs.dev/" className="flex items-center">
              <img
                src="https://meshjs.dev/logo-mesh/white/logo-mesh-white-128x128.png"
                className="mr-3 h-8"
                alt="Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                NFT Marketplace
              </span>
            </a>
          </div>
          <div className="grid grid-cols-3 gap-40 text-gray-900 dark:text-white">
            <div >
              <h2 className="mt-6 text-sm font-semibold uppercase">
                Contact
              </h2>
              <p className="mt-6">NFTmarketplace@gmail.com</p>
              <p className="mt-6"><a href="/">Facebook</a></p>
              <p className="mt-6"><a href="/">Instagram</a></p>
              <p className="mt-6"><a href="/">Telegram</a></p>

            </div>

            <div >
              <h2 className="mt-6 text-sm font-semibold uppercase">
                Marketplace
              </h2>
              <p className="mt-6">Art</p>
              <p className="mt-3">Gaming</p>
              <p className="mt-3">Memberships</p>
              <p className="mt-3">PFPs</p>
              <p className="mt-3">Photography</p>
              <p className="mt-3">Music</p>

            </div>


            <div>
              <h2 className="mt-6 text-sm font-semibold uppercase">
                Resources
              </h2>
              <p className="mt-6">Blogs</p>
              <p className="mt-3">Learn</p>
              <p className="mt-3">Help Center</p>
              <p className="mt-3">Community standards</p>
              <p className="mt-3">Taxes</p>
              <p className="mt-3">Developer platform</p>
              <p className="mt-3">Platform status</p>
              <p className="mt-3">Partners</p>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
