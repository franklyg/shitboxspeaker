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
    <section className="w-screen h-screen md:h-64 md:py-64 md:w-9/12 inset-y-0 right-0 block flex flex-col absolute content-end p-3 text-right shadow-xl" style={{backgroundImage: 'url('+coverImage.url+')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', margin: 'auto', top: '-10rem'}}>
      <h3 className="mb-2 text-4xl lg:text-6xl">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a>
            <RichText render={title} />
          </a>
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-1">{excerpt}</p>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </section>
  )
}
