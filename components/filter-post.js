import Link from 'next/link';
import PostPreview from '../components/post-preview';

export default function FilterPost({ posts, filterPageTitle, tagName }) {
    return (
      <section>
        <div className="posts-parent">
          
            <h2 className="text-6xl md:text-7xl font-secondary-title tracking-tight md:tracking-tighter leading-tight">
              <a  href={`/${tagName}`}>
                {filterPageTitle}
              </a>
            </h2>
          <div className="post-holder">
            {posts.map(({ node }) => (
              node._meta.tags[0] === `${tagName}` ?
              // <div className="grid col-gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <>
                <PostPreview
                  key={node._meta.uid}
                  title={node.title}
                  coverImage={node.coverimage}
                  date={node.date}
                  slug={node._meta.uid}
                  excerpt={node.excerpt}
                  tags={node._meta.tags}
                  sectionSpecificStyle="home-post shadow-xl"
                  />
              </>
              :null
            ))}
            <Link href={`/${tagName}`}>
              <a className="read-more home-post shadow-xl">READ MORE</a>
            </Link>
          </div>
        </div>
      </section>
    )
}
