// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSevayRaOwPDPQAzmx5LMhBryBsO2czZ6FY4eKPRpB8gUa15eQ/viewform?embedded=true'

function NominatePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 15000)
    return () => clearTimeout(timeout)
  }, [])

  const handleLoad = () => setIsLoading(false)

  return (
    <motion.div className="relative min-h-screen w-full">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-[#1a193a]"
            aria-live="polite"
            aria-busy="true"
          >
            <div
              className="h-14 w-14 rounded-full border-4 border-[#49c1ef]/25 border-t-[#49c1ef] animate-spin"
              role="status"
              aria-label="Loading"
            />
            <div className="text-center px-6">
              <p className="text-lg sm:text-xl font-semibold text-white">
                Loading nomination form
              </p>
              <p className="mt-2 text-sm sm:text-base text-[#49c1ef]/80">
                This may take a moment…
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <iframe
        src={FORM_URL}
        title="The Lab Leader Community Expert Application"
        onLoad={handleLoad}
        className={`min-h-screen w-full border-0 transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </motion.div>
  )
}

export default NominatePage
