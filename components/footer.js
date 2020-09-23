import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="">
      <Container>
        <div className="grid">
          <Link href="/music">
            Music
          </Link>
        </div>
      </Container>
    </footer>
  )
}
