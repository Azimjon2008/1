function $(selector){
   let ele
   if (typeof selector === 'string') {
       ele = document.querySelectorAll(selector)
   }
   return new JQ(ele)
}
function JQ(par) {
    this.element = par

    // on()

    this.on = function (event, callFn) {
        for (let i = 0; i < this.element.length; i++) {
            this.element[i].addEventListener(event, callFn)
        }
        return this
    }

    // addClass()

    this.addClass = function(nameClass) {
        if (typeof nameClass == 'string') {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].classList.add(nameClass)
                
            }
        }
        return this
    }

    // removeClass()

    this.removeClass = function(nameClass) {
        if (typeof nameClass == 'string') {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].classList.remove(nameClass)
                
            }
        }
        return this
    }

    // toggleClass()

    this.toggleClass = function(nameClass) {
        if (typeof nameClass == 'string') {
            for (let i = 0; i < this.element.length; i++) {
                if(this.element[i].classList.contains(nameClass)){
                    this.element[i].classList.remove(nameClass)
                }
                else{
                    this.element[i].classList.add(nameClass)
                }
            }
        }
        return this
}

    // hasClass

    this.hasClass = function(nameClass) {
		var className, elem,
			i = 0;

		className = " " + nameClass + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}

    // hover()

    this.hover = function(mouseOverFn, mouseOutFn){
        if(typeof mouseOverFn == 'function' && typeof mouseOutFn == 'function'){
            this.on('mouseover', mouseOverFn);
            this.on('mouseout', mouseOutFn);
        }
        return this
    }
    this.width = function(width) {
        if (typeof width == 'string') {
           for (let i = 0; i < this.element.length; i++) {
               this.css({
                   width
               })
               
           }
                
            }
            return this
        }
        this.css = function(styleName, value) {
            if ((typeof styleName == 'string') && (typeof value == 'string' || typeof value == 'number')) {
                for (let i = 0; i < this.element.length; i++) {
                    this.element[i].style = `${styleName} : ${ value}`;
                }
            } else if(typeof styleName == 'object' && Array.isArray(styleName) == false) {
                for (let i = 0; i < this.element.length; i++) {
    
                    for(const key in styleName) {
                        this.element[i].style[key] = styleName[key]
                    }
                    
                }
            }
            return this
        }
       
    }

  
    
