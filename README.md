# Centroid 2D
A package to find the area weighted center of a convex polygon whose mass is evenly distributed across the surface.

## Usage

```sh
$ npm i centroid2d
```

```js
const findCentroid = require('centroid2d)

let polygon = [
    [0, 0],
    [5, 0],
    [5, 5],
    [0, 5],
]
let centroid = findCentroid(polygon) // [2.5, 2.5]
```

Input must be an array of arrays of x and y coordinates.

There is no typechecking for simplicity and speed.

## TODO:

## Feedback ✉️
It is greatly appreciated! 🎉

[Website 🌐](https://jacobsmith.tech)

[js@jacobsmith.tech](mailto:js@jacobsmith.tech)

[https://github.com/limeandcoconut](https://github.com/limeandcoconut)

[@limeandcoconut 🐦](https://twitter.com/limeandcoconut)

Cheers!

## License

ISC, see [license](/license) for details.
