const evaluate = require('node-eval')
const exifParser = require('exif-parser')
const fs = require('fs')

module.exports = function exifLoader (source) {
  const callback = this.async()

  const buffer = Buffer.alloc(65635)
  const parser = exifParser.create(buffer)

  const publicPath = this._compilation.outputOptions.publicPath || '/'

  fs.open(this.resourcePath, 'r', function (err, imageHandle) {
    if (err) return callback(err)
    fs.read(imageHandle, buffer, 0, buffer.length, 0, function (err, bytesRead) {
      if (err) return callback(err)
      const exif = parser.parse()

      callback(null, `export const exif = ${JSON.stringify(exif)}
        export const src = "${evaluate(`__webpack_public_path__='${publicPath}'; ${source}`)}"`)
    })
  })
}
