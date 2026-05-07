import { useCallback } from 'react'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'
import styles from './ParticleBackground.module.css'

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <div className={styles.particleContainer}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: 'push',
              },
              onHover: {
                enable: false,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ['#ffffff'],
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.08,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 0.35,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 45,
            },
            opacity: {
              value: 0.15,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            shape: {
              type: ['circle'],
            },
            size: {
              value: { min: 1, max: 4 },
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  )
}

export default ParticleBackground

