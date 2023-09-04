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
		
	

 
