'use client'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa6";
import { Mail } from "lucide-react"
import Image from "next/image";

const companyInfo = [
  {
    country: "USA",
    registration: "Pay-Quik Financial Services Limited, registered in United States. File N0: 1173456300028",
    address: "325 Cedar Ave S  STE 7, Minneapolis, MN 55454.",
  },
  {
    country: "UK",
    registration: "Pay-Quik Financial Servicces LTD-834653. Smal Payment Institution (SPI) 9",
    address: "Red Lion Court, Alexandra Rd, Hounslow, London TW3 1JS. United Kingdom",
  },
  {
    country: "Australia",
    registration: "Pay-Quik Financial Services Pty Ltd, registered in Australia, ACN 630 747 607.",
    address: "Registered office Shop 11, 144 Nicholson St, Footscray, VIC 3011",
  },
]

export function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-50 border-t border-gray-200">
      <div className="container max-w-screen-2xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Company Registration */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800">Company Registration</h3>
            <div className="space-y-4">
              {companyInfo.map((info) => (
                <div key={info.country} className="space-y-1">
                  <h4 className="font-medium text-gray-800">{info.country}</h4>
                  <p className="text-sm text-gray-700">{info.registration}</p>
                  <p className="text-sm text-gray-700">{info.address}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Email</h4>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a 
                    href="mailto:info@pay-quik.com"
                    className="flex items-center gap-2"
                  >
                    <Mail/>
                    info@pay-quik.com
                  </a>
                </Button>
              </div>

              <div>
                <h4 className="font-medium text-gray-800 mb-2">WhatsApp</h4>
                 <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <a
                      href="https://wa.me/+971543311773"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <FaWhatsapp color="#25D366" size={20} />
                      Chat with us
                    </a>
                </Button>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Learn More</h3>
            <div>
              <p className="text-sm text-gray-600 mb-4">
                Discover more about our company, mission, and the team behind these innovative applications.
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="https://pay-quik.com/about">About Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-2">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600"> &copy; {currentYear} Pay-Quik. All rights reserved.</p>
            <div className="logo-mask">
              <Image src={'/logo.png'} alt="Pay-quik Logo" height={250} width={250} sizes="250" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
