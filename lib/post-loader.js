const regex = /```json([\s\S]*)```\s*([\s\S]*)/g

module.exports = function postLoader (source) {
  const match = regex.exec(source)

  const json = JSON.parse(match[1])
  json.markdown = match[2]

  return JSON.stringify(json)
}
