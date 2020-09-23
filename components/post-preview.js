import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags,
  sectionSpecificStyle,
  fullCopy,
  content
}) {
  // home-post border border-black shadow-lg
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <a className={sectionSpecificStyle}>
          {/* <div className="post-image">
            <img src={coverImage.url} alt={title} />
          </div>
          <div className="post-info">
            <h3 className="leading-snug font-card-content">
              <RichText render={title} />
            </h3>
          </div> */}
        {
          fullCopy ?
          <>
            <div className="latest-content" style={{ background: `url(${coverImage.url})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: 'inherit', backgroundPosition: 'center' }}>
              <div className="post-content">
                <div className="post-info">
                  <h3 className="leading-snug font-card-content">
                    <RichText render={title} />
                  </h3>
                </div>
                <p>{excerpt}</p>
              </div>
            </div>
          </>
          : 
          <>
            <div className="post-image">
              <img src={coverImage.url} alt={title} />
            </div>
            <div className="post-info">
              <h3 className="leading-snug font-card-content">
                <RichText render={title} />
              </h3>
            </div>
          </>
        }
      </a>
    </Link>
  )
}
