import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className="posts-parent more-stories-parent">
        {/* <h2 className="text-6xl md:text-7xl font-secondary-title tracking-tight md:tracking-tighter leading-tight">
          The Lastest...
        </h2> */}
        <div className="more-stories">
          {posts.map(({ node }) => (
            <PostPreview
              content={node.content[0].text}
              key={node._meta.uid}
              title={node.title}
              coverImage={node.coverimage}
              date={node.date}
              author={node.author}
              slug={node._meta.uid}
              excerpt={node.excerpt}
              sectionSpecificStyle="more-stories-content"
              fullCopy={true}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
