// import React, { useEffect, useState } from 'react'
// import Floor from '../assets/floorr.png'
// import Lever from '../assets/lever.png'
// import LeverPulled from '../assets/lever on.png'
// import Main from '../assets/main.mp4'
// import Char from '../assets/char.png'
// import EnterKey from '../assets/enterkey.png'
// import { motion, AnimatePresence } from 'framer-motion'
// import runSound from '../assets/run.mp3' 
// import typesound from '../assets/typing.mp3' 

// const useMediaQuery = (query) => {
//   const [matches, setMatches] = useState(false)
//   useEffect(() => {
//     const media = window.matchMedia(query)
//     if (media.matches !== matches) setMatches(media.matches)
//     const listener = () => setMatches(media.matches)
//     media.addEventListener('change', listener)
//     return () => media.removeEventListener('change', listener)
//   }, [matches, query])
//   return matches
// }

// // === CUSTOMIZATION ===
// const TEXT_COLOR = '#FFA500'
// const FONT_FAMILY = `'Press Start 2P', monospace`
// const TYPE_SPEED = 50
// const MOBILE_FONT_SIZE = '10px'
// const DESKTOP_FONT_SIZE = '14px'

// const messages = [
//   'Loading KritOS...',
//   'Initializing creativity...',
//   'Installing retro vibes...',
//   'System ready!',
// ]

// const BootScreen = ({ onComplete }) => {
//   const [isPulled, setIsPulled] = useState(false)
//   const [showFadeOut, setShowFadeOut] = useState(false)
//   const [showCharacter, setShowCharacter] = useState(false)
//   const [textIndex, setTextIndex] = useState(0)
//   const [typedText, setTypedText] = useState('')
//   const [showBlink, setShowBlink] = useState(false)
//   const isMobile = useMediaQuery('(max-width: 768px)')

//   useEffect(() => {
//     const pullTimer = setTimeout(() => setIsPulled(true), 6700)
//     const fadeOutTimer = setTimeout(() => setShowFadeOut(true), 7700)
//     const charTimer = setTimeout(() => setShowCharacter(true), 9000)
//     return () => {
//       clearTimeout(pullTimer)
//       clearTimeout(fadeOutTimer)
//       clearTimeout(charTimer)
//     }
//   }, [])


//   useEffect(() => {
//   const handleKeyPress = (e) => {
//     if (showBlink && (e.key === 'Enter' || e.keyCode === 13)) {
//       onComplete()
//     }
//   }
//   window.addEventListener('keydown', handleKeyPress)
//   return () => window.removeEventListener('keydown', handleKeyPress)
// }, [showBlink, onComplete])


// // Typewriter effect (UPDATED BLOCK)
// useEffect(() => {
//   if (!showCharacter || textIndex >= messages.length) {
//     if (textIndex >= messages.length) {
//       setTimeout(() => {
//         setShowBlink(true)
//       }, 500) // Add a small delay before showing the blinking message
//     }
//     return
//   }

//   const current = messages[textIndex]
//   let i = 0
//   const interval = setInterval(() => {
//     if (i <= current.length) {
//       setTypedText(current.slice(0, i))
//       i++
//     } else {
//       clearInterval(interval)
//       setTimeout(() => {
//         setTextIndex((prev) => prev + 1)
//       }, 800)
//     }
//   }, TYPE_SPEED)

//   return () => clearInterval(interval)
// }, [showCharacter, textIndex])


//   return (
//     <div className="boot-screen min-h-screen bg-black relative overflow-hidden text-white font-mono">
//       {/* INITIAL PHASE */}
//       <AnimatePresence>
//         {!showFadeOut && (
//           <motion.div
//             className="absolute inset-0 flex items-center justify-center flex-col z-10"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.5 }}
//           >
//             <img
//               src={Floor}
//               alt="Floor"
//               className="w-[80%] max-w-[600px] h-auto mx-auto z-30 relative"
//             />

//             {/* Lever */}
//             <img
//               src={isPulled ? LeverPulled : Lever}
//               alt="Lever"
//               className="
//                 absolute
//                 w-[60px] sm:w-[80px] md:w-[90px]
//                 top-[50%] left-[50%]
//                 transform
//                 -translate-x-[120px] -translate-y-[60px]
//                 md:-translate-x-[260px] md:-translate-y-[80px]
//                 z-40 transition-all duration-500
//               "
//             />

//             {/* Video */}
//             <motion.video
//               src={Main}
//               autoPlay
//               muted
//               className="
//                 absolute
//                 top-[50%] left-[50%]
//                 transform -translate-x-1/2 -translate-y-1/2
//                 w-[220px] sm:w-[280px] md:w-[320px]
//                 h-auto object-contain z-10
//               "
//               initial={{ x: isMobile ? 100 : 300, opacity: 0 }}
//               animate={{ x: isMobile ? -40 : -140, opacity: 1 }}
//               transition={{ duration: 2, delay: 1 }}
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* CHARACTER & TEXT PHASE */}
//       {showCharacter && (
//         <motion.div
//           className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-4 p-4 z-50"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           {/* Character */}
//           <motion.img
//             src={Char}
//             alt="Character"
//             className="w-[200px] sm:w-[280px] md:w-[320px]"
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1.5 }}
//           />

//           {/* Typewriter text */}
//           <div
//             style={{
//               color: TEXT_COLOR,
//               fontFamily: FONT_FAMILY,
//               fontSize: isMobile ? MOBILE_FONT_SIZE : DESKTOP_FONT_SIZE,
//               whiteSpace: 'pre-wrap',
//               lineHeight: '1.8',
//               maxWidth: '90vw',
//               textAlign: isMobile ? 'center' : 'left',
//             }}
//           >
//             {typedText}
//               {showBlink && (
//                 <div
//                   className={`
//                     flex flex-col items-center justify-center
//                     ${isMobile ? 'gap-0 mt-4' : 'gap-4 mt-[50px] '}
//                   `}
//                 >
//                   <motion.div
//                     animate={{ opacity: [0, 1, 0] }}
//                     transition={{ repeat: Infinity, duration: 1.5 }}
//                     className="text-center"
//                   >
//                     Click START to continue
//                   </motion.div>
//                   <motion.img
//                           src={EnterKey}
//                           alt="Enter Key"
//                           onClick={onComplete}
//                           className={`
//                             cursor-pointer
//                              hover:scale-110
//                             ${isMobile ? 'w-[150px] mt-[-40px]' : 'w-[200px] mt-[-20px] mb-[-190px]'}
//                           `}
//                           animate={{
//                             scale: [1, 1.05, 1],
//                           }}
//                           transition={{
//                             repeat: Infinity,
//                             duration: 1.5,
//                           }}
//                         />
//                 </div>
//               )}

//           </div>
//         </motion.div>
//       )}
//     </div>
//   )
// }

// export default BootScreen


import React, { useEffect, useState, useRef } from 'react'
import Floor from '../assets/floorr.png'
import Lever from '../assets/lever.png'
import LeverPulled from '../assets/lever on.png'
import Main from '../assets/main.mp4'
import Char from '../assets/char.png'
import EnterKey from '../assets/enterkey.png'
import { motion, AnimatePresence } from 'framer-motion'
import runSound from '../assets/run.mp3' 
import typesound from '../assets/typing.mp3' 

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false)
  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) setMatches(media.matches)
    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [matches, query])
  return matches
}

// === CUSTOMIZATION ===
const TEXT_COLOR = '#FFA500'
const FONT_FAMILY = `'Press Start 2P', monospace`
const TYPE_SPEED = 50
const MOBILE_FONT_SIZE = '10px'
const DESKTOP_FONT_SIZE = '14px'

const messages = [
  'Loading KritOS...',
  'Initializing creativity...',
  'Installing retro vibes...',
  'System ready!',
]

const BootScreen = ({ onComplete }) => {
  const [isPulled, setIsPulled] = useState(false)
  const [showFadeOut, setShowFadeOut] = useState(false)
  const [showCharacter, setShowCharacter] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [showBlink, setShowBlink] = useState(false)
  const isMobile = useMediaQuery('(max-width: 768px)')

  // === AUDIO REFS ===
  const runAudioRef = useRef(null)
  const typingAudioRef = useRef(null)

  useEffect(() => {
    const pullTimer = setTimeout(() => setIsPulled(true), 6700)
    const fadeOutTimer = setTimeout(() => setShowFadeOut(true), 7700)
    const charTimer = setTimeout(() => {
      setShowCharacter(true)
    }, 9000)

    // Play run sound
    if (runAudioRef.current) {
      runAudioRef.current.currentTime = 0
      runAudioRef.current.play().catch(() => {})
    }

    return () => {
      clearTimeout(pullTimer)
      clearTimeout(fadeOutTimer)
      clearTimeout(charTimer)
    }
  }, [])

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (showBlink && (e.key === 'Enter' || e.keyCode === 13)) {
        onComplete()
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [showBlink, onComplete])

  // Typewriter effect with typing sound
  useEffect(() => {
    if (!showCharacter || textIndex >= messages.length) {
      if (textIndex >= messages.length) {
        setTimeout(() => {
          setShowBlink(true)
        }, 500)
      }
      return
    }

    const current = messages[textIndex]
    let i = 0

    // Play typing sound
    if (typingAudioRef.current) {
      typingAudioRef.current.loop = true
      typingAudioRef.current.currentTime = 0
      typingAudioRef.current.play().catch(() => {})
    }

    const interval = setInterval(() => {
      if (i <= current.length) {
        setTypedText(current.slice(0, i))
        i++
      } else {
        clearInterval(interval)
        if (typingAudioRef.current) {
          typingAudioRef.current.pause()
          typingAudioRef.current.currentTime = 0
        }
        setTimeout(() => {
          setTextIndex((prev) => prev + 1)
        }, 800)
      }
    }, TYPE_SPEED)

    return () => clearInterval(interval)
  }, [showCharacter, textIndex])

  return (
    <div className="boot-screen min-h-screen bg-black relative overflow-hidden text-white font-mono">
      {/* === AUDIO ELEMENTS === */}
      <audio ref={runAudioRef} src={runSound} />
      <audio ref={typingAudioRef} src={typesound} />

      {/* INITIAL PHASE */}
      <AnimatePresence>
        {!showFadeOut && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center flex-col z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src={Floor}
              alt="Floor"
              className="w-[80%] max-w-[600px] h-auto mx-auto z-30 relative"
            />

            {/* Lever */}
            <img
              src={isPulled ? LeverPulled : Lever}
              alt="Lever"
              className="
                absolute
                w-[60px] sm:w-[80px] md:w-[90px]
                top-[50%] left-[50%]
                transform
                -translate-x-[120px] -translate-y-[60px]
                md:-translate-x-[260px] md:-translate-y-[80px]
                z-40 transition-all duration-500
              "
            />

            {/* Video */}
            <motion.video
              src={Main}
              autoPlay
              muted
              className="
                absolute
                top-[50%] left-[50%]
                transform -translate-x-1/2 -translate-y-1/2
                w-[220px] sm:w-[280px] md:w-[320px]
                h-auto object-contain z-10
              "
              initial={{ x: isMobile ? 100 : 300, opacity: 0 }}
              animate={{ x: isMobile ? -40 : -140, opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* CHARACTER & TEXT PHASE */}
      {showCharacter && (
        <motion.div
          className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-4 p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Character */}
          <motion.img
            src={Char}
            alt="Character"
            className="w-[200px] sm:w-[280px] md:w-[320px]"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          />

          {/* Typewriter text */}
          <div
            style={{
              color: TEXT_COLOR,
              fontFamily: FONT_FAMILY,
              fontSize: isMobile ? MOBILE_FONT_SIZE : DESKTOP_FONT_SIZE,
              whiteSpace: 'pre-wrap',
              lineHeight: '1.8',
              maxWidth: '90vw',
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            {typedText}
            {showBlink && (
              <div
                className={`
                  flex flex-col items-center justify-center
                  ${isMobile ? 'gap-0 mt-4' : 'gap-4 mt-[50px] '}
                `}
              >
                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-center"
                >
                  Click START to continue
                </motion.div>
                <motion.img
                  src={EnterKey}
                  alt="Enter Key"
                  onClick={onComplete}
                  className={`
                    cursor-pointer
                    hover:scale-110
                    ${isMobile ? 'w-[150px] mt-[-40px]' : 'w-[200px] mt-[-20px] mb-[-190px]'}
                  `}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default BootScreen

