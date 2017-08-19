export default ({ className }, ...rest) =>
  [className, ...rest]
    .filter(value => typeof value === 'string' && value.length > 0)
    .join(' ')
