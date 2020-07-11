import markdownStyles from './markdown-styles.module.css'
import { RichText } from 'prismic-reactjs'

export default function PostBody({ content }) {
  return (
    <div className="post-content flex grid flex-row grid-cols-12 col-gap-8">
      <div className="col-span-4"></div>
      <div className={markdownStyles['markdown'], `col-span-7`}>
        <RichText render={content} />
      </div>
    </div>
  )
}
