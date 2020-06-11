# Testimonial Slider

## Description

This is a challenge provided by [Frontend Mentor](https://www.frontendmentor.io/). And this is one of the many solutions availables. If you want to see any other solution, please refreer to the official website.

Since this is just a sample, I think there are no contributions to do here, and I think I won't update this unless find new interesting things for animations or to improve the JS code.

If you want to place a comment on the code, please feel free to do it, feedback is always welcome 😉 but I encourage you to try to do this challenge by your own, trust me, it's very helpful and teaches you a couple of things.

Also, you can fork this repo if you find it useful, but it's better to start from the scratch, either way, do it whatever make you feel more comfortable.

## Solution thinking

I'm going to try to explain how I get to my solution here, breaking down into HTML, CSS and Javascript by it's own. Just in case anyone would find this helpful. One of my toughest challenge was try to figure out the structure of the HTML markup, I belive that if you have a very strong markup on your HTML file you'll find easier to style the site, so, here I go.

### HTML

One of the most common things that I found difficult is how to name the classes in HTML and also how to structure the markup itself. So for the first part, I had to take a look at the BEM (Block, Element, Modifier) methodology (if you want to know more about it, you can go to this [site](https://en.bem.info/methodology/) where you can see what is this about and how you can implement it).

That already gave me the basics for how to name my classes in my document, like `slider__item` , `slider__control` , `control--next` , `slider__image` and so on. Now that I knew how to name my classes, still doesn't know how to organize the tags in HTML. One common thing you'll read/hear when you're new into programming is that you can learn a lot if you see anyone else's code. So, for this particular reason, I went for something that I already knew, a popular framework like [Bootstrap](https://getbootstrap.com/).

I don't intended to use it everything on it, I just want to see the implementation, look at the code and try to understan how and why they did it in that way. Once I had that, gave me the idea to structure properly my file.

### CSS

Now that I had the proper markup in place, the next thing was to use the "mobile first" approach, which basically was easy to do. The hardest part for me, was to choose a proper breakpoint for the next styles so, I decided to go with `768px`}. At that point my second thought was if I should use flex or simply float elements in order to avoid complicating things here.

So, I did both, the reason, was because I was using some animations that require the `slider__item` to be block and If I used the flex approach it would require a bit more time to got back to the mobile styles, fix the styles for the elements and animations and then continue with the remaining styles. So I decided to not go back and just try to mix the approaches in order to make them work properly.

### Javascript

This section took me a little bit to compehend, but at the end, I was able to nailed it. First thing I did, was to figure out how the slider suppose to work. A slider, has a current item (which is the element that is actually on the screen) and also has a next and previous elements for the proper events for the slider controls.

With that in mind, I knew I had to have some kind of counter that allow me to know which is my current slider item and once having that, just needed to update properly my next and previous variables. So, I had to had the basic functionality of it (I didn't want to mess up with animation classes yet, just the single show/hide classes) and the first thing I did was to work on the "next" event handler functionality. There were many approaches here, one of them, was to disable the next control when the user reaches the end of the items, but I wanted to make the slider loops thru all the items. Meaning that if the user reaches the end of the slider items and clicks once again the "next" control, that would take the user to the first slide.

The rest of the functionality (for the "previous" slider item) is almost the same but I just had to make the inverse of the "next" event handler. At some point I realized that the slider is a very good example to implement a `Linked List` (some of us have a CS degree and other don't, for those who don't have any previous experience about it, would be a good idea to research a little bit about algorithms and data structures). So, I went for it, made my implementation (you can check it on the code and see if is a good implementation or could need some performance), after that, made a lot of tests and eveything seems to work correctly.

When I had the functionality completed, I just decided it was time to mess up with the "fancy" stuff (like animations), and I had to find the proper way to add the classes in the correct order to make the slider have those classes and then cleaned them up after a few seconds. So, for this last part, I just created a custom class which iterates thru the items of the slider in order to find if any item have any of those modifiers classes, if they have it, just removed, and all of this was done using the `setTimeout` function with a very small amount of time, just to make the transition look smooth.

## Live Site

If you want to take a look at the site, go to [https://testimonials-slider-lemon.now.sh/](https://testimonials-slider-lemon.now.sh/)

Also, I encourage you to take a look a the [Vercel](https://vercel.com/) website is an awesome tools to host your static websites at no cost and have wonderful integration with Github repositories.
