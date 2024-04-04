import { NotFound } from '@/pages'
import { ReactNode } from 'react'
import { Route, Routes } from 'react-router-dom'

const RoutesWithNotFound = ({
  children,
}: {
  children: ReactNode | ReactNode[]
}) => (
  <Routes>
    {children}
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default RoutesWithNotFound
