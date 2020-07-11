export default function PostTitle({ children }) {
  return (
    <h1 className="post-title text-6xl md:text-7xl lg:text-8xl tracking-wider font-post-title mb-12 text-center md:text-left">
      {children}
    </h1>
  )
}
