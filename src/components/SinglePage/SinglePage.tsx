import './SinglePage.css'
import { ReactNode } from 'react'

const SinglePage = ({
  title,
  children,
}: {
  title: string
  children: ReactNode | ReactNode[]
}) => (
  <main className="single-page">
    <article>
      <h1>{title}</h1>
      {children}
    </article>
  </main>
)

export default SinglePage
