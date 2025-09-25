import Image from "next/image"

const app = {
  id: "1",
  name: "Pay-Quik",
  description: "Get access to our powerful application — available on iOS and Android. Fast, secure, and built to simplify payments on the go.",
  image: "/app.webp",
  downloadLinks: {
    ios: {
      uk: "https://apps.apple.com/us/app/payquik-uk/id6737229185",
      australia: "https://apps.apple.com/us/app/pay-quik/id1450078299",
    },
    android: {
      uk: "https://play.google.com/store/apps/details?id=com.org.payquick&pli=1",
      australia: "https://play.google.com/store/apps/details?id=com.payquik.dmt.finance",
    },
  },
}

export function DownloadSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-8 pb-16 px-4 overflow-hidden">
      <div className="container max-w-screen-xl mx-auto text-center relative z-10">
        {/* Main Content */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-4xl font-bold text-gray-800 mb-6 text-balance">Download The {app.name} app</h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 text-pretty">{app.description}</p>

          <div className="flex flex-col items-center gap-6 mb-16">
            {/* UK Version */}
            <div className="flex flex-col items-center gap-3">
              <span className="text-gray-800 font-bold text-xl">UK Version</span>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={app.downloadLinks.ios.uk}
                  className="block hover:scale-105 transition-transform duration-200"
                  aria-label="Download UK version from App Store"
                >
                  <Image
                    src="/appstore.svg"
                    alt="Download on the App Store"
                    width={160}
                    height={48}
                    className="h-12 w-auto"
                  />
                </a>
                <a
                  href={app.downloadLinks.android.uk}
                  className="block hover:scale-105 transition-transform duration-200"
                  aria-label="Download UK version from Google Play"
                >
                  <Image
                    src="/playstore.png"
                    alt="Get it on Google Play"
                    width={160}
                    height={48}
                    className="h-12 w-auto"
                  />
                </a>
              </div>
            </div>

            {/* Australia Version */}
            <div className="flex flex-col items-center gap-3">
              <span className="text-gray-800 font-bold text-xl">Australia Version</span>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={app.downloadLinks.ios.australia}
                  className="block hover:scale-105 transition-transform duration-200"
                  aria-label="Download Australia version from App Store"
                >
                  <Image
                    src="/appstore.svg"
                    alt="Download on the App Store"
                    width={160}
                    height={48}
                    className="h-12 w-auto"
                  />
                </a>
                <a
                  href={app.downloadLinks.android.australia}
                  className="block hover:scale-105 transition-transform duration-200"
                  aria-label="Download Australia version from Google Play"
                >
                  <Image
                    src="/playstore.png"
                    alt="Get it on Google Play"
                    width={160}
                    height={48}
                    className="h-12 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-end gap-4 md:gap-8 relative">
          <div className="transform rotate-[-5deg] hover:rotate-0 transition-transform duration-300">
            <Image
              src="/1.webp"
              alt="App interface showing categories"
              width={250}
              height={500}
              className="w-48 md:w-64 h-auto rounded-[2rem] shadow-2xl"
            />
          </div>
          <div className="transform scale-110 hover:scale-115 transition-transform duration-300 z-10">
            <Image
              src="/2.webp"
              alt="App interface showing product details"
              width={280}
              height={560}
              className="w-56 md:w-72 h-auto rounded-[2rem] shadow-2xl"
            />
          </div>
          <div className="transform rotate-[5deg] hover:rotate-0 transition-transform duration-300">
            <Image
              src="/3.webp"
              alt="App interface showing user profile"
              width={250}
              height={500}
              className="w-48 md:w-64 h-auto rounded-[2rem] shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
