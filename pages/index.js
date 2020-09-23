import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Latest from '../components/latest'
import FilterPost from '../components/filter-post'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index({ preview, allPosts }) {

  const heroPost = allPosts[0].node
  const morePosts = allPosts.slice(0, 5)
  const latestPosts = allPosts.slice(1,5)
  const filterPost = allPosts.slice(0,4)

  return (
    <>
      <Layout preview={preview}>
          <div className="fold w-full">
            <div className="title font-secondary-title">
              <p className="letter letter-1"><span>S</span></p>
              <p className="letter letter-2"><span>H</span></p>
              <p className="letter letter-3"><span>*</span></p>
              <p className="letter letter-4"><span>T</span></p>
              <p className="letter letter-5"><span>B</span></p>
              <p className="letter letter-6"><span>O</span></p>
              <p className="letter letter-7"><span>X</span></p>
              <p className="letter letter-8"><span>S</span></p>
              <p className="letter letter-9"><span>P</span></p>
              <p className="letter letter-10"><span>E</span></p>
              <p className="letter letter-11"><span>A</span></p>
              <p className="letter letter-12"><span>K</span></p>
              <p className="letter letter-13"><span>E</span></p>
              <p className="letter letter-14"><span>R</span></p>
            </div>
            {heroPost && (
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.coverimage}
                date={heroPost.date}
                author={heroPost.author}
                slug={heroPost._meta.uid}
                excerpt={heroPost.excerpt}
              />
            )}
          </div>
        <div>
          {morePosts.length > 0 && <Latest posts={latestPosts} />}
        </div>
        
        <div>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </div>

        <div className="pt-6">
          {filterPost.length > 0 && <FilterPost posts={filterPost} tagName="music" filterPageTitle="Music"/>}
        </div>
        <div className="pt-6">
          {filterPost.length > 0 && <FilterPost posts={filterPost} tagName="fashion" filterPageTitle="Fashion"/>}
        </div>
        <div className="pt-6">
          {filterPost.length > 0 && <FilterPost posts={filterPost} tagName="cinema" filterPageTitle="Cinema"/>}
        </div>
        <div className="pt-6">
          {filterPost.length > 0 && <FilterPost posts={filterPost} tagName="sports" filterPageTitle="Sports"/>}
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await getAllPostsForHome(previewData)
  return {
    props: { preview, allPosts },
  }
}
