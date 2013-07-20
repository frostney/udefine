udefine
=======

Define a module as an AMD module and handle it as if it's an UMD module

**Features**  
* Provides a handy function wrapper for UMD modules
* Same fuction signature as AMD modules
* No need for boilerplate definitions
* Less than 0.3 kB minified and gzipped

**Usage**  
```javascript
(function(root) {
  // This definition only needs to be done once, not per module
  root.udefine.globals.jquery = this.jQuery;
})(this);

udefine('myModule', ['jquery'], function($) {
  $.fn.myModule = function() { /* ... */ };
});
```

If an AMD module loader like RequireJS has been integrated and configured, 
it will resolve through the AMD loader.

If that's not the case it will call the module on the namespace provided through
`udefine.globals[dependencyName]`.

udefine is not and does not replace a module loader. It is primarily for
developers who want their library to target AMD modules, CommonJS modules and/or
the classic way of binding object to the global window object.

For more examples, take a look at the *examples* folder.

**License**  
This is public domain. See *UNLICENSE.md* for more information.