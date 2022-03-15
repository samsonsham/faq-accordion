# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](https://ik.imagekit.io/c5xc1x6srka/screenshot/screen-faq-accordion-card_od1E5I_j2.png)

### Links

- Solution URL: [https://github.com/samsonsham/faq-accordion](https://github.com/samsonsham/faq-accordion)
- Live Site URL: [https://samsonsham.github.io/faq-accordion/](https://samsonsham.github.io/faq-accordion/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Vanilla JS

### What I learned

- Major parts of accordion (header and panel) and how to make it.
- Making use of Chrome plugin to help pixel perfect front-end development.

```js
const accListener = () => {
  const accs = document.querySelectorAll('.accordion-header');
  accs.forEach((acc) => {
    acc.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('active');
      const panel = e.currentTarget.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
};
```

### Useful resources

- [How TO - Collapsibles/Accordion](https://www.w3schools.com/howto/howto_js_accordion.asp) - I learnt to make accordion from this.
- [CSS Accordion Examples That Are Amazing and Open Source](https://www.sliderrevolution.com/resources/css-accordion/#:~:text=show%2Fhide%20functionality.-,Almost%20all%20websites%20contain%20a%20CSS%20accordion%20in%20at%20least,and%20reveal%20them%20if%20requested.) - Introducing different approaches of making accordion.
- [Perfect Pixel](https://www.welldonecode.com/perfectpixel/) - Useful tools for pixel perfect web-development.

## Author

- Website - [Samson Sham](https://samson-sham-portfolio.vercel.app)
- Frontend Mentor - [@samsonsham](https://www.frontendmentor.io/profile/samsonsham)
- Twitter - [@samson_sham](https://www.twitter.com/samson_sham)
