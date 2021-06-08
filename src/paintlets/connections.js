/* global registerPaint */

import { checkInputVariable } from '../helpers'

const WORKLET_NAME = 'connections'

registerPaint(
  WORKLET_NAME,
  class {
    static get inputProperties() {
      return [
        `--${WORKLET_NAME}-point-count`,
        `--${WORKLET_NAME}-point-radius`,
        `--${WORKLET_NAME}-min-dist`,
        `--${WORKLET_NAME}-stroke-color`,
        `--${WORKLET_NAME}-fill-color`
      ]
    }

    paint(ctx, paintSize, props) {
      // debugger
      const pointCount = checkInputVariable(
        props,
        `--${WORKLET_NAME}-point-count`,
        100,
        'number'
      )
      const minDist = checkInputVariable(
        props,
        `--${WORKLET_NAME}-min-dist`,
        25,
        'number'
      )
      const radius = checkInputVariable(
        props,
        `--${WORKLET_NAME}-point-radius`,
        1,
        'number'
      )
      const strokeColor = checkInputVariable(
        props,
        `--${WORKLET_NAME}-stroke-color`,
        '#777',
        'color'
      )
      const fillColor = checkInputVariable(
        props,
        `--${WORKLET_NAME}-fill-color`,
        '#000',
        'color'
      )

      ctx.strokeStyle = strokeColor
      ctx.fillStyle = fillColor
      ctx.lineWidth = 0.15

      new Array(pointCount)
        .fill(null)
        .map((_, i) => [
          Math.random() * paintSize.width,
          Math.random() * paintSize.height
        ])
        .forEach(([x, y], i, self) => {
          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.closePath()
          ctx.fill()
          for (let n = i; n < self.length; n++) {
            const next = self[n]
            const [nextx, nexty] = next
            const dx = x - nextx
            const dy = y - nexty
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < minDist) {
              ctx.moveTo(x, y)
              ctx.lineTo(nextx, nexty)
              ctx.stroke()
            }
          }
        })
    }
  }
)
