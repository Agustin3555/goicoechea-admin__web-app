import { Icon, SinglePage } from '@/components'
// import { PRIVATE_ROUTES } from '@/routes'
// import { useCallback } from 'react'
// import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  // const navigate = useNavigate()

  // const handleGoBack = useCallback(() => navigate(PRIVATE_ROUTES.admin, { replace: true }), [])

  return (
    <SinglePage title="Error 404">
      <div className="not-found-content">
        <p className="text">
          El error 404 ocurre cuando se intenta acceder a una página que no
          existe en un sitio web. Este problema puede surgir debido a una URL
          incorrecta, una página eliminada o problemas de redirección.
        </p>
        {/* <Button
            title="Volver"
            style={{
              backgroundColor: {
                dark: COLOR.a,
              },
            }}
            handleClick={handleGoBack}
          >
            <div className="button-content">
              <Icon iconName="fa-solid fa-arrow-left" style={{ size: FONT_SIZE.s }} />
              <span className="text">Volver</span>
            </div>
          </Button> */}
      </div>
    </SinglePage>
  )
}

export default NotFound
