"use client"
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type Props={
    testimonials:{
        text:string;
        field:string;
        image:string;
    }[]
}

const TestimonialCarousel = ({testimonials}:Props) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial(
        (prevTestimonial) => (prevTestimonial + 1) % testimonials.length,
      )
    }, 5000) // Change Time here

    return () => {
      clearInterval(intervalId)
    }
  }, [currentTestimonial])

  const { text, field, image } = testimonials[currentTestimonial]

  const variants = {
    initial: { opacity: 0, y: '100%', scale: 0.1 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: '100%', scale: 0.1 },
  }
  const dotVariants = {
    active: { scale: 1.2, backgroundColor: '#3f3f46' },
    inactive: { scale: 1, backgroundColor: '#D1D5DB' },
  }

  return (
    <section className="py-12 md:py-24">
      <div className="w-full max-w-2xl">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentTestimonial}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            className="flex w-full flex-col items-center justify-center"
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 20,
              duration: 0.5,
            }}
          >
            <img src={image} alt={field} className="m-0 h-36 rounded-md" />
            <div className="mx-auto mt-5">
              <div className="flex flex-col items-center justify-center space-x-3">
                <div className="font-regular text-sm text-gray-900/80">
                  {field}
                </div>
              </div>
            </div>
            
            <p className="m-0 text-center text-2xl font-medium tracking-tight">
              &quot;{text}&quot;
            </p>
            </motion.div>
          <div className="mt-8 flex justify-center">
            {testimonials.map((_, index) => (
              <motion.div
                key={index}
                className="mx-1 h-1 w-1 cursor-pointer rounded-full"
                variants={dotVariants}
                animate={index === currentTestimonial ? 'active' : 'inactive'}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default TestimonialCarousel
