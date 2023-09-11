# Tailwind-study

## **Tailwind is a css utility classes and 'separation of concern'**

## Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.

## It's fast, flexible, and reliable — with zero-runtime.

 ### Recommend some ext : 
	-tailwind css intelisense > auto complete tag
	- live preview
	- PostCSS languange support >  for modern and experimental CSS

 ### day 2 : 
  	-i learn to make gradient color
	-make configuration color in tailwind.config.js
	-conf environment like use npx tailwindcss -i ./src/css/input.css -o ./public/css/output.css --watch
	-make automaiccaly with npm run dev

### day 3 : 
	-Arbiratry value[nilai sembarang] > example : bg-[#fff], mt-[42px]
	-bg-attachment > bg-fixed, bg-local, bg-scroll
	-learn bg like bg size, bg-position, bg-repeat,  
	- memberi style css serta memasukin img random dari unsplash

### day 4 : 
	-learn about border like > rounder and divide
	-learn effect like : shadow color and mix blend
	-learn filter like : brightnest, grayscale, brightnest and blur

	-pseudo class
	  if you want make the button on the middle you have to make the default button to block(default:black) and you can put mx-auto
		-focus > it's condition which start before button click(active)
			--focus:ring > default is blue, you can change the color
		-groub > make child access parent element, how to: use group in the parent element, and you can use group-hover/active/focus in the child element
		-selection > selection text as a you want
		-float > Utilities for controlling the wrapping of content around an element. > float left, float right, float none

	-pseudo element
		-make a validation input email with peer, after and invalid
		-peer > make relationship between siblings > peer(siblings), peer-invisible(siblings2)
		- after and before is a pseudo element which there will be input an element (before:content[''])
		-invalid > just could use from element input 

### day 5 
	-Learn transform > skew,translate,scale, rotate, origin
 		--skew : miring, origin : move origin(tempat asal)
   	-learn animation and transition like delay, duration, timing function(ease in out)
    		--animation > like bounce, spin, pulse, and ping
### day6 
    Learn about layout1 
	 --positioning > absolute, relative, static
				-fixed > to viewport
	  --Floating > memindahkan posisi elemen
		 -flex absolute translate-x-1/2 left-1/2 -top-2 > membuat elemen ditengah

	  --container > manage an element and min-width, (usually use to collumns)
	  --smooth-scroling > make a web scroll smooth
	  --columns > tailwind make it easy, we can put on element container or parent and boom it will be fitted that we want

### day7
	Learn Responssive Design
	  Every utility class in Tailwind can be applied conditionally at different breakpoints.

		-Container > membuat jarak maksimal dan minimal(full layout ketika mobile)
		-md:bg-blue lg:bg-transparent > key if you want to one of prefix in specified element
		- Learn object fit(cover,contain and other) and position
		-Breakpoints : sm,md,lg,xl,2xl (start with min-width)
		   --example : <img class="w-16 md:w-32 lg:w-48" src="...">
		-tracking > distance among words (white-space)
		
		Working mobile first : 
			-- What this means is that unprefixed utilities (like uppercase) take effect on all screen sizes,
				 while prefixed utilities (like md:uppercase) only take effect at the specified breakpoint and above.


### day 8
	Learn about Flexbox
 		- how to make a galery card with flexbox
   		- overflow > fitted an element in container
     		- flex wrap > wrap,nowrap and wrap-reverse
       		- flex > justify,align
	 Lack of you learn
  		-Learn more about flex shrink and grow

### day 9
	learn about display grid > collumn and row
 		for use this, firstly add 'grid'
        	     -grid-cols > make any size collumns on your all screen sizes
              	     -gap > give distance on your element
		     -aspect ration > video[16:9] or you can customize with arbitrary value [4:3]
       		     -overflow > a utilities for controlling the container within element

### day 10 
	directive and function
	you can make auto rename tag with cdn, but you have to include the tailwind.config.js
	-in mode @apply we can't include the group so we must added manual from class utilities
	-Use the @layer directive to tell Tailwind that which element that we want customize
	-Use @apply This is useful when you need to write custom CSS and use the same syntax you’re used to using in your HTML.
		@layer base {	//custom defaultcss
 			 h1 {
  			  @apply text-2xl;
			  }
			}

		@layer components {  //for make a component
  			.btn-blue {
  			  @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
 			 }
			}

		@layer utilities {  //custom utilities default tailwind
		  	.filter-none {
			    filter: none;
  			}
 			}

	Function
	  -Use the theme() function to access your Tailwind config values 
		@layer base {
 			 h1 {
				@apply text-riko //different way use instead use theme
   				 color: theme(colors.riko)	//theme is better because its explained to style css for have specific value
  			  }
			}
	 	
		
	

 
