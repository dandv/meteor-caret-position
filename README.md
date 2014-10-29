## Caret position for `<input type="text">` and `textarea` elements

Component's [caret-position](https://github.com/component/textarea-caret-position) repackaged for [Meteor](http://meteor.com).

Get the `top` and `left` coordinates of the caret in a `<textarea>` or
`<input type="text">`, in pixels. Useful for textarea autocompletes like 
GitHub or Twitter, or for single-line autocompletes like the name drop-down 
in Facebook or the company dropdown on Google Finance.

## Demo

**Check out the [JSFiddle](http://jsfiddle.net/dandv/aFPA7/).**

## Learn more

See the [caret-position](https://github.com/component/textarea-caret-position) *Component*.

## API

## var coordinates = getCaretCoordinates(element, position)

`position` is an integer indicating the location of the caret. You basically pass `this.selectionStart` or `this.selectionEnd`. This way, this library isn't opinionated about what the caret is.

`coordinates` is an object of the form `{top: , left: }`, with values in pixels.


## Contributors

* Dan Dascalescu ([dandv](https://github.com/dandv))

Development initially sponsored by [StockBase](http://stockbase.com), LLC.


## License

The MIT License (MIT)

Copyright (c) 2014 Jonathan Ong me@jongleberry.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
