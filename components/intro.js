import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 absolute inset-y-0 block z-10">
      <h1 className="main-header text-6xl md:text-8xl font-bold font-main-title uppercase tracking-wider italic relative leading-tight md:pr-8">
        Shitbox Speaker
      </h1>
    </section>
  )
}
