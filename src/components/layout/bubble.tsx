import './bubble.less'

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
function getRandomBorderRadius() {
  const min = 30
  const max = 80
  return `${getRandomInt(min, max)}% ${getRandomInt(min, max)}% ${getRandomInt(min, max)}% ${getRandomInt(min, max)}%`
}

const bubbles = [...Array(9)].map(() => {
  const borderRadius = getRandomBorderRadius()

  return {
    duration: getRandomInt(6, 12),
    borderRadius: `${borderRadius} / ${borderRadius}`,
    borderRadiusAnimation: `${getRandomBorderRadius()} / ${getRandomBorderRadius()}`,
  }
})
const styles = bubbles.map(({ borderRadius, borderRadiusAnimation }, index) => `
@keyframes bubble${index + 1} {
  0% {
    border-radius: ${borderRadius};
  }

  50% {
    border-radius: ${borderRadiusAnimation};
  }

  100% {
    border-radius: ${borderRadius};
  }
}
`).join('\n')
export default function Bubble() {
  return (
    <div className="bubbleContainer">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      {bubbles.map(({ borderRadius, duration }, index) => (
        <div
          className={`bubble bubble${index + 1}`}
          style={{
            animation: `bubble${index + 1} ${duration}s ease-in-out infinite`,
            borderRadius,
          }}
        />
      ))}
    </div>
  )
}
