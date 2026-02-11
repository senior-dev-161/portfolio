import React, { useState } from "react"
import TopNavbar from "../components/TopNavbar"
import ScrollToTopButton from "../components/ScrollToTopButton"
import Footer from "../components/Footer"
import QRCodeContainer from "@components/QRCodeContainer"

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showQR, setShowQR] = useState(false);

  return (
    <>
      <div className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
        <TopNavbar />
        <main className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-darkFifth">{children}</main>
        <Footer setShowQR={setShowQR} showQR={showQR} />
        <ScrollToTopButton />
        <QRCodeContainer showQR={showQR} setShowQR={setShowQR} />
      </div>
    </>
  )
}
