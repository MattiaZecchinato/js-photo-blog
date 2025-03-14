# Photo Blog

## Day 1

Prototype for day 1

![day1 desktop](img-readme/day1/day1-desktop.png)

### Milestone 1
- Through the attached screenshots we reproduce the graphics statically: using only HTML and CSS and reproducing a single photograph.

![milestone1](img-readme/day1/milestone1/day1-mileston1.png)

### Milestone 2

- Using Postman, we test a call to this endpoint: 
https://lanciweb.github.io/demo/api/pictures/
- Let's analyze the response and the data it provides and start thinking about how we can use it.

    #### API reference

- ##### URI
```
    https://lanciweb.github.io/demo/api/pictures/
```

- ##### Parameters

```
    No paramenters.
```

- ##### Description

```
    Get a list of pictures.
```

- ##### Response

```ruby
    [
        {
            "id": 1,
            "title": "Skate Park",
            "date": "01-07-2024",
            "url": "https://marcolanci.it/boolean/assets/pictures/1.png"
        },
        ...
    ]
```

### Milestone 3

- We create a JavaScript sheet and make an AJAX call to the API, exploiting the response to dynamically generate a series of pictures on the page!

![milestone3](img-readme/day1/milestone3/day1-mileston3.png)

## Languages Used

![Static Badge](https://img.shields.io/badge/HTML-orange)
![Static Badge](https://img.shields.io/badge/CSS-purple)
![Static Badge](https://img.shields.io/badge/JavaScript-yellow)

## Authors

- [@Mattia Zecchinato](https://www.github.com/MattiaZecchinato)