import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import Latest from '../../components/latest'
import FilterPost from '../../components/filter-post'
import HeroPost from '../../components/hero-post'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import { getAllPostsForHome } from '../../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'

export default function Index({ preview, allPosts }) {

  const heroPost = allPosts[0].node
  const morePosts = allPosts.slice(5, 9)
  const filterPost = allPosts.slice(0,4)

  return (
    <>
      <Layout preview={preview}>
        <div className="pt-6">
          {filterPost.length > 0 && <FilterPost posts={filterPost} tagName="music" filterPageTitle="Music"/>}
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
