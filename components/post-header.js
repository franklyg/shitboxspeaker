import { RichText } from 'prismic-reactjs'
import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author }) {
  return (

    <>
      <div className="flex grid flex-row grid-cols-12 col-gap-8">
        {/* <div className="content-image mb-8 md:mb-16 -mx-5 sm:mx-0 col-span-12 md:col-span-6 lg:col-span-4 h-64 py-40" style={{backgroundImage: 'url('+coverImage.url+')', backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <CoverImage title={RichText.asText(title)} url={coverImage.url} />
        </div> */}
        <div className="col-span-12 md:col-span-6 lg:col-span-8">
          <PostTitle>{title[0].text}</PostTitle>
          {/*<div className="block md:hidden">
            {author && <Avatar name={author.name} picture={author.picture} />}
          </div>
          <div className="hidden md:block">
          {author && <Avatar name={author.name} picture={author.picture} />}
          </div>*/}
          <div className="text-lg">
            <Date dateString={date} />
          </div>
        </div>
      </div>
    </>

  )
}
