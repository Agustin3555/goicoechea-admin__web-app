import './ParticleMotion.css'
import { useEffect } from 'react'
import { COLOR, Color, NOT_FONT_SIZE } from '@/styles'
import { debounce, randomInt, dropRandom } from '@/helpers'

const ParticleMotion = ({
  basicSeparation = 350,
}: {
  basicSeparation?: number
}) => {
  useEffect(() => {
    const particleMotions =
      window.document.querySelectorAll<HTMLElement>('.particle-motion')

    const SIZES: number[] = [26, 42, 68]

    const BORDER_WIDTH = [
      NOT_FONT_SIZE['5xs'],
      NOT_FONT_SIZE['4xs'],
      NOT_FONT_SIZE['3xs'],
      NOT_FONT_SIZE['2xs'],
    ]

    const COLORS: Color[] = [COLOR.a, COLOR.gs_14]

    const MAX_MISMATCH = 64
    const MIN_DURATION = 30
    const MAX_DURATION = 60

    // Valores aproximados
    // TODO: comentar cuando se producen esas medidas
    const MAX_HEIGHT = 1100
    const MIN_HEIGHT = 400

    const COMPENSATION = 1500

    const handleResize = () => {
      particleMotions.forEach(particleMotion => {
        const { clientWidth, clientHeight } = particleMotion

        let size = 0
        let step = 0

        const updateStep = () => {
          const mismatch = randomInt({ max: MAX_MISMATCH })
          size = dropRandom(SIZES)
          step = Number(basicSeparation) + mismatch - size / 2
        }

        updateStep()

        const paramsElements: {
          particle: {
            vars: {
              squareSize: number
              animation: { duration: number; delay: number }
            }
            left: number
          }
          square: {
            borderWidth?: string
            borderColor?: string
            backgroundColor?: string
          }
        }[] = []

        // Calcular los parametros de los elementos
        for (
          // Primer particle
          let left = -(size / 2);
          // Última particle
          left < clientWidth - step / 2;
          // Paso dinámico
          left += step
        ) {
          /*
            Calcular la probabilidad de eliminación en función del
            clientHeight, con el objetivo de minimizar el numero de particulas
            en screen en vistas de páginas con un height mínimo.
          */

          const minHeight = MIN_HEIGHT - COMPENSATION
          const maxHeight = MAX_HEIGHT - COMPENSATION

          const deletionProbability =
            1 - (clientHeight - minHeight) / (maxHeight - minHeight)
          /*
            Generar un número aleatorio entre 0 y 1 para determinar si eliminar
            el elemento.
          */
          const randomValue = Math.random()
          /*
            Si el número aleatorio es menor que la probabilidad de eliminación,
            omitir este elemento.
          */
          if (randomValue < deletionProbability) continue

          const duration =
            randomInt({ min: MIN_DURATION, max: MAX_DURATION }) *
            clientHeight *
            0.00125

          paramsElements.push({
            particle: {
              vars: {
                squareSize: size,
                animation: {
                  duration,
                  delay: randomInt({ max: duration }),
                },
              },
              left,
            },
            square: randomInt({ max: 1 })
              ? {
                  borderWidth: dropRandom(BORDER_WIDTH),
                  borderColor: dropRandom(COLORS),
                }
              : { backgroundColor: dropRandom(COLORS) },
          })

          updateStep()
        }

        // Eliminar los elementos anteriores
        while (particleMotion.firstChild)
          particleMotion.removeChild(particleMotion.firstChild)

        // Crear los nuevos elementos con los parámetros calculados
        paramsElements.forEach(item => {
          const { vars, left } = item.particle
          const { squareSize, animation } = vars
          const { duration, delay } = animation

          const particle = window.document.createElement('span')
          particle.className = 'particle'
          particle.style.setProperty('--container-height', `${clientHeight}px`)
          particle.style.setProperty('--square-size', `${squareSize}px`)
          particle.style.setProperty('--animation-duration', `${duration}s`)
          particle.style.setProperty('--animation-delay', `-${delay}s`)
          particle.style.left = `${left}px`

          const square = window.document.createElement('span')
          square.className = 'square'
          square.style.borderWidth = item.square.borderWidth || ''
          square.style.borderColor = item.square.borderColor || ''
          square.style.backgroundColor = item.square.backgroundColor || ''

          particleMotion.appendChild(particle).appendChild(square)
        })
      })
    }

    handleResize()

    // Agregar un evento de redimensionamiento con debounce
    window.addEventListener('resize', debounce(handleResize, 500))

    const handleVisibilityChange = () =>
      particleMotions.forEach(particleMotion =>
        particleMotion.style.setProperty(
          '--animation-play',
          window.document.visibilityState !== 'hidden' ? 'running' : 'paused'
        )
      )

    /*
      Agregar un evento de cambio de visibilidad para pausar o reanudar las
      animaciones.
    */
    window.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return <span className="particle-motion" />
}

export default ParticleMotion
