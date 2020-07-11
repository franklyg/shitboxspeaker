import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'
// <CoverImage
//   title={RichText.asText(title)}
//   slug={slug}
//   url={coverImage.url}
// />

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <a className="home-post relative"  style={{backgroundImage: 'url('+coverImage.url+')', backgroundPosition: 'center'}}>
        <div className="post-info p-2 flex flex-col content-end transition-all duration-500">
          <h3 className="text-3xl mb-3 leading-snug font-card-content">
            <RichText render={title} />
          </h3>
          <div>
            <p className="text-lg leading-relaxed mb-4 font-card-content">{excerpt}</p>
            <Avatar name={author.name} picture={author.picture} />
          </div>
        </div>
      </a>
    </Link>
  )
}
