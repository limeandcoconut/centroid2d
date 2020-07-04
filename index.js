/* eslint-disable no-mixed-operators */

module.exports = (vertices) => {
    let centroidX = 0.0
    let centroidY = 0.0
    let signedArea = 0.0
    let x0 = 0.0
    let y0 = 0.0
    let x1 = 0.0
    let y1 = 0.0
    let a = 0.0
    let vertex0
    let vertex1

    let i
    let vertexCount = vertices.length
    for (i = 0; i < vertexCount - 1; i++) {
        vertex0 = vertices[i]
        vertex1 = vertices[i + 1]

        x0 = vertex0[0]
        y0 = vertex0[1]
        x1 = vertex1[0]
        y1 = vertex1[1]

        a = x0 * y1 - x1 * y0
        signedArea += a
        centroidX += (x0 + x1) * a
        centroidY += (y0 + y1) * a
    }

    // Do last vertex separately for efficiency's sake
    x0 = vertices[vertices.length - 1][0]
    y0 = vertices[vertices.length - 1][1]
    x1 = vertices[0][0]
    y1 = vertices[0][1]
    a = x0 * y1 - x1 * y0
    signedArea += a
    centroidX += (x0 + x1) * a
    centroidY += (y0 + y1) * a

    signedArea *= 0.5
    let a6 = 6.0 * signedArea
    centroidX /= a6
    centroidY /= a6

    return [centroidX, centroidY]
}
