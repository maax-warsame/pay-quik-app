import { Header } from "@/components/header"
import { DownloadSection } from "@/components/download-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="w-full relative">
      {/* Gradient background only behind header + main */}
      <div className="min-h-screen w-full relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, 
                rgba(240,253,250,1) 0%, 
                rgba(204,251,241,0.7) 30%, 
                rgba(153,246,228,0.5) 60%, 
                rgba(94,234,212,0.4) 100%
              ),
              radial-gradient(circle at 40% 30%, rgba(255,255,255,0.8) 0%, transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(167,243,208,0.5) 0%, transparent 50%),
              radial-gradient(circle at 20% 80%, rgba(209,250,229,0.6) 0%, transparent 45%)
            `,
          }}
        />

        <Header />

        <main className="relative z-10">
          <DownloadSection />
        </main>
         <Footer />
      </div>
    </div>
  )
}


