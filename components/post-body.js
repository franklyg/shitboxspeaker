import markdownStyles from './markdown-styles.module.css'
import { RichText } from 'prismic-reactjs'

export default function PostBody({ content, coverImage }) {
  return (
    <div className="post-content flex grid flex-row grid-cols-12 col-gap-8">
      {/* <div className="md:col-span-12 lg:col-span-4"></div> */}
      <div className="content-image h-full mb-8 md:mb-16 -mx-5 sm:mx-0 md:col-span-12 lg:col-span-4 h-64 py-40" style={{backgroundImage: 'url('+coverImage.url+')', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        {/*<CoverImage title={RichText.asText(title)} url={coverImage.url} />*/}
      </div>
      <div className={markdownStyles['markdown'], `px-4 lg:px-0 col-span-12 lg:col-span-7`}>
        <RichText render={content} />
      </div>
    </div>
  )
}
