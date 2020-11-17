let coin = {
    state: 0,
    flip: function() {
        this.state = Math.floor(Math.random() * 2);
        return this.toString();
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {
        if(this.state==0){return "Heads"}else{return "Tails"}
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let image = document.createElement('img');
         image.setAttribute("style", "height:150px; width:150px;");
        if (this.state==0){
            image.src="./images/coin1.jpg"
        }
        else {
            image.src="./images/coin2.jpg"
        }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
       },
    
  
}; 
 function display20Images() {
    for(let i=0; i<20; i++){
     coin.flip();
   document.querySelector("body").append(coin.toHTML())}
}
   function display20Flips() {
     for(let i=0; i<20; i++){
     coin.flip();
     let flip = document.createElement('span');
     flip.innerHTML =  `${(i+1)}.<strong> ${coin.toString()} </strong>`;
     document.querySelector("body").append(flip);
 }
}
display20Flips()
display20Images()