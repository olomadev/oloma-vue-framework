
## 1x Patches & Fixes

- added some configurations to fix sass 3.0 deprecations

https://stackoverflow.com/questions/78997907/the-legacy-js-api-is-deprecated-and-will-be-removed-in-dart-sass-2-0-0

```js
css: {
	preprocessorOptions: {
	  sass: {
	    api: 'modern',
	    silenceDeprecations: ["legacy-js-api"],
	  }
	}
},
```

- updated all src/components/sass files. Replaces @import "x" as @use "x"
- added namespace to sass files like below

```js
@import "./variables" as v;

p code {
	background: rgba(v.$color-black, 0.1);
	color: rgba(v.$color-black, 0.8);
}
```

- added sass loader "sass-loader": "^16.0.2", to package.json

