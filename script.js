/*Name this external file gallery.js*/

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
  previewPic.className = "selectedPic"
  x = document.getElementById('image')
  asdasdasd = previewPic.src
  x.textContent = `${previewPic.alt}`
  x.style.backgroundImage = `url(${asdasdasd})`
  x.style.backgroundRepeat = "no-repeat"
  x.style.backgroundSize = "contain"
  dsadsa = previewPic.tabIndex + 1
  x.tabIndex = `dsadsa`
	}

let elementIndex;

	function unDo(asdasd){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
    elementIndex++
    if (elementIndex == 7){
      elementIndex = 0
    }
    
		asdasd.className = "preview"              
    asd = document.getElementById('image')
    asd.style.background = `none`
    asd.style.backgroundColor = `#8e68ff`
    asd.textContent = "Hover over an image below to display here."
    if (asdasd.id == 'pic6') {
      document.getElementById("firstPic7").focus()
    }
	}

//Focus element used to call focus on load
function tabFocus(dsadsa){
  dsadsa.focus()
}