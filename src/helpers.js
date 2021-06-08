/* global CSSUnparsedValue */
/* global CSSUnitValue */
/* global CSSStyleValue */

export function checkInputVariable(props, name, defaultValue, defaultType) {
  const inputVariable = props.get(name)

  // No CSS variable supplied
  if (!inputVariable.length) {
    return defaultValue
  }

  // Paint API supported
  if (inputVariable instanceof CSSUnparsedValue) {
    if (defaultType === 'number' || defaultValue === 'percentage') {
      return parseInt(inputVariable.toString())
    } else {
      return inputVariable.toString()
    }
  } else if (inputVariable instanceof CSSUnitValue) {
    return inputVariable.value
  } else if (inputVariable instanceof CSSStyleValue) {
    return inputVariable
  }

  // Paint API polyfilled
  if (defaultType === 'color') {
    return inputVariable
  } else {
    return parseInt(inputVariable)
  }
}
