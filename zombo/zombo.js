$(function(){
	var main = $("#container")
	var zombo = $("#zombo_words")
	var spin_canvas = $("#spinner")
	var unmute = $("#unmute-overlay")
	var spin_ctx = spin_canvas[0].getContext("2d")
	var frames = []
	var fps = 1000/12
	var height = spin_canvas.prop("height")
	var frame = 0
	var letters = ["S", "i", "g", "n ", "Up " ,"F", "or ", "Th", "e ", "N", "ew", "Z", "Let", "ter"]
	var promise = zombo[0].play()
	for(var i = 0; i<5; i++){
		frames[i] = new Image();
		//frames[i].crossorigin = "Anonymous" do i even need this
		frames[i].src = `spinner_frames/${i+1}.svg`
	}
	unmute.show()
	unmute.on("click", function(){
		zombo.prop("muted", false)
		unmute.hide()
	})
	var load = window.setInterval(function(){
		frame = (frame + 1)%5
		height = spin_canvas.prop("height")
		spin_ctx.save()
		spin_ctx.setTransform(1,0,0,1,0,0);
		spin_ctx.clearRect(0,0, height, height)
		spin_ctx.restore()
		if(frames[frame].complete){
			spin_ctx.drawImage(frames[frame], 0, 0, height, height)
		}
	}, fps)
	setTimeout(function(){
		clearInterval(load);
		spin_canvas.remove();
		zombo.remove();
		unmute.hide()
		var ins = $("<a href=\"join1.htm\" id=\"rolltext\"></a>").appendTo(container);
		frame = 0
		var rolltext = window.setInterval(function(){
			ins.text(letters.slice(0,frame).join(""))
			ins.html(ins.text().replace("Z", "<span class=\"red\">Z</span>"))
			frame++
			if(frame > letters.length){
				clearInterval(rolltext)
			}
		}, fps);
	},109250);
})