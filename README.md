# Password Verification JS

I made a javascript library to verify user input passwords. It Verify Followings

- Uppercase Letters (Min 1 Uppercase letter)
- Lowercase Letters (Min 1 Lowercase letter)
- Numbers (Min 1 Number)
- Symbols (Min 1 Symbol)

## Features

- Simple HTML and SCSS file any one can edit.
- Simple Javascript Code Using Jquery 3

## Installation

### Required ibraries

[jQuery 3.6](https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js)

[Poppins Font](https://fonts.google.com/specimen/Poppins?query=poppins)


1. Download JS file and CSS file
2. Import Both Files to your Project
3. Add This HTML Code To Your Form Where You Need To Add Password Input Field (Don't change ids or class in this HTML code)


```html
<div class="form-row" id="password-field">
   <label for="password-input">Password</label>
   <input type="password" id="password-input" class="form-input">
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="eye-show"><path fill="#673ab7" d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"/></svg>
   <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="eye-hide"><path fill="#673ab7" d="M10.94,6.08A6.93,6.93,0,0,1,12,6c3.18,0,6.17,2.29,7.91,6a15.23,15.23,0,0,1-.9,1.64,1,1,0,0,0-.16.55,1,1,0,0,0,1.86.5,15.77,15.77,0,0,0,1.21-2.3,1,1,0,0,0,0-.79C19.9,6.91,16.1,4,12,4a7.77,7.77,0,0,0-1.4.12,1,1,0,1,0,.34,2ZM3.71,2.29A1,1,0,0,0,2.29,3.71L5.39,6.8a14.62,14.62,0,0,0-3.31,4.8,1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20a9.26,9.26,0,0,0,5.05-1.54l3.24,3.25a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Zm6.36,9.19,2.45,2.45A1.81,1.81,0,0,1,12,14a2,2,0,0,1-2-2A1.81,1.81,0,0,1,10.07,11.48ZM12,18c-3.18,0-6.17-2.29-7.9-6A12.09,12.09,0,0,1,6.8,8.21L8.57,10A4,4,0,0,0,14,15.43L15.59,17A7.24,7.24,0,0,1,12,18Z"/></svg>
   <div class="validate">
      <div>
        <span class="va-required" id="va-uppercase"></span><p>Capital Letter</p>
      </div>
      <div>
        <span class="va-required" id="va-lowercase"></span><p>Simple Letter</p>
      </div>
      <div>
        <span class="va-required" id="va-number"></span><p>Number</p>
      </div>
      <div>
        <span class="va-required" id="va-special-char"></span><p>Special Characters</p>
      </div>
      <div>
        <span class="va-required" id="va-minlength"></span><p>Min 8 Characters</p>
      </div>
    </div>
  </div>
```


4. Add id="form-submit-btn" As ID Of Your From Submit Button
```html
  <button class="btn" type="submit" id="form-submit-btn">Register</button>
```


#### Thats it. If you want full code will form download my reposotory. Enjoy  🎉🎉🎉🎉🎉



## License

MIT

**Free Software**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
