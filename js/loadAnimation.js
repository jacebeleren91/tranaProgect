function statrJawsjs(){
	var sprite;
	var anim;
	var myGameState = {
	  setup: function() {
	  	sprite = new jaws.Sprite({x: 10, y: 10, scale: 1, anchor: "top_left"});
	  	anim = new jaws.Animation({sprite_sheet: "img/sdhb_50x180.png", frame_duration: 4, frame_size:[180,50]});
	  	sprite.anim_default = anim.slice(0,4);
	  	sprite.setImage( sprite.anim_default.next() );
	  
	  },   /* Called once */
	  update: function() { sprite.setImage( sprite.anim_default.next() ); },  /* Called each gametick */ 
	  draw: function() {
		jaws.clear();
		sprite.draw();
		}      /* Called each gametick after update() */
	}
	jaws.assets.add("img/sdhb_50x180.png");
	jaws.canvas = $("#main_canvas");
	jaws.start(myGameState, {fps: 4});
	printLog("jaws Started", "info");
}


