import './SinglePage.css'
import { ReactNode } from 'react'

const SinglePage = ({
  title,
  children,
}: {
  title: string
  children: ReactNode | ReactNode[]
}) => (
  <main className="single-page glass">
    <h1>{title}</h1>
    {children}
  </main>
)

export default SinglePage
