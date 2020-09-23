import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section className="hero-image shadow-lg" style={{backgroundImage: 'url('+coverImage.url+')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', margin: 'auto'}}>
      <div className="text-right pt-8 pr-8 relative z-20">
        <h1 className="hero-title text-6xl text-black font-secondary-title">
          <RichText render={title} />
        </h1>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="font-secondary-title">
            Read This Shit
          </a>
        </Link>
      </div>
    </section>
  )
}
