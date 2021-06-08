(function () {
  'use strict';

  const WORKLET_NAME = 'grass';

  registerPaint(
    WORKLET_NAME,
    class {
      static get inputProperties() {
        return []
      }

      paint(ctx, paintSize, props) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(paintSize.width, paintSize.height / 3);
        ctx.stroke();
      }
    }
  );

}());
