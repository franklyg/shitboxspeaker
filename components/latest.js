import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className="grid grid-cols-4">
        {posts.map(({ node }) => (
            <PostPreview
              key={node._meta.uid}
              title={node.title}
              coverImage={node.coverimage}
              date={node.date}
              slug={node._meta.uid}
              excerpt={node.excerpt}
              sectionSpecificStyle="latest"
            />
        ))}
      </div>
    </section>
  )
}
