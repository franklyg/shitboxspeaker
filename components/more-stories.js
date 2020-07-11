import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="text-6xl md:text-7xl font-secondary-title tracking-tight md:tracking-tighter leading-tight">
        Lastest Reviews
      </h2>
      <div className="grid col-gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 col-gap-0">
        {posts.map(({ node }) => (
          <PostPreview
            key={node._meta.uid}
            title={node.title}
            coverImage={node.coverimage}
            date={node.date}
            author={node.author}
            slug={node._meta.uid}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
