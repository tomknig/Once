# Once

> Once renders your static DOM changes. Therefor encapsulate your static code to make your objects renderable.

## Usage

* Import the Once script:
```html
<script src='once.js'></script>
```

* Create a script with a custom id:
```html
<script id='myOnce'>
```

* Feed an array with your renderable objects
```javascript
var renderables = [new Swipe('mySwipe', {a: b}), new Swipe('mySwipe2'), ... ]; //Swipe hast to be renderable
```

* Initialize with Once with your renderables:
```javascript
new Once(renderables);
```
```html
</script>
```

## Renderability

* There are 4 steps to make any object renderable for Once

```javascript
function YourConstructor( ... ) {
    // 1. make sure to include this line
    this.args = arguments;
    
    // 2. include this definition and make your dom changes within the defined function
    this.render = function () {
    
        {{your code}}
        
        // 3. make sure to call this line when your changes are done
        this.isRendered(this);
    };
    
    // 4. include this definition and start your interactivity only here
    this.init =  function () {
    
        {{your code}}
    };
}
```



## Contact

[Tom König](http://github.com/TomKnig) [@TomKnig](https://twitter.com/TomKnig)

## License

DelegationManager is available under the MIT license. See the LICENSE file for more info.