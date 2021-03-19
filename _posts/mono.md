---
title: "Anonymus Pro"
use: "Code blocks and highlighting"
author: "Mark Simonson"
autLink: "https://www.marksimonson.com/fonts/view/anonymous-pro"
ipsum: "this is some code: <pre>code: %block_of_code% </pre>"
fontName: "Anonymous-Pro"
tags: fonts
---

# usage

## Link the file
```html
       <link rel="preload" href="/fonts/VaultAlarm-Regular.woff" as="font" type="font/woff" crossorigin>
```

## Load the file using `@fontface`

``` css
  @font-face {
      font-family: Anonymous-Pro;
      src: url(/fonts/Anonymous-Pro.woff) format("woff"),
    url(/fonts/Anonymous-Pro.ttf) format("truetype");
        font-weight: normal;
      font-display: swap;
  }

```

## CSS

``` css
font-family: 'VaultAlarm', impact, sans-serif;
```