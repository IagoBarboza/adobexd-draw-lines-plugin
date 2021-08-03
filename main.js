const { Line, Color } = require('scenegraph')
const commands = require('commands')

const randomColor = () => {
  const colors = ['red', 'green', 'blue', 'purple', 'yellow', 'orange']
  return colors[Math.floor(Math.random() * colors.length)]
}

const lineData = [
  { startX: 100, startY: 110, endX: 210, endY: 233 },
  { startX: 210, startY: 233, endX: 320, endY: 156 },
  { startX: 320, startY: 156, endX: 400, endY: 300 },
  { startX: 400, startY: 300, endX: 500, endY: 120 }
]

const drawLines = async (selection) => {
  const lines = []

  lineData.forEach(({ startX, startY, endX, endY }) => {
    const line = new Line()

    line.setStartEnd(startX, startY, endX, endY)

    line.strokeEnabled = true
    line.stroke = new Color(randomColor())
    line.strokeWidth = 3

    lines.push(line)
    
    selection.editContext.addChild(line)
  })

  selection.items = lines
  commands.group()
}

module.exports = {
  commands: {
    drawLines
  }
}