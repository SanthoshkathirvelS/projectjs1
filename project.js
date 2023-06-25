function next(){
  let displayimage=  document.getElementById("img1")

  if(displayimage.src.match("team-1.jpg")){
    displayimage.src="team-4.jpg"
    document.getElementById("a").innerHTML="ROBERT FIGU"
    document.getElementById("b").innerHTML="UX GURU"
  } else{
    displayimage.src="team-1.jpg"
    document.getElementById("a").innerHTML="LOURENCE BRADLY"
    document.getElementById("b").innerHTML="GENERAL MANAGER"

  }
}

function next1(){
    let displayimage1=  document.getElementById("img2")
    if(displayimage1.src.match("team-2.jpg")){
        displayimage1.src="team-5.jpg"
        document.getElementById("c").innerHTML="FRANK JORDAN"
    document.getElementById("d").innerHTML="FINANCIAL MANAGER"
      } else{
        displayimage1.src="team-2.jpg"
        document.getElementById("c").innerHTML="JEFF LORENCEN"
    document.getElementById("d").innerHTML="MANAGER"
      }
}

function next2(){
    let displayimage2=  document.getElementById("img3")
    if(displayimage2.src.match("team-3.jpg")){
        displayimage2.src="team-6.jpg"
        document.getElementById("e").innerHTML="LINDA BERNSTEIN"
    document.getElementById("f").innerHTML="WEB DEVELOPER"
      } else{
        displayimage2.src="team-3.jpg"
        document.getElementById("e").innerHTML="LIA MINDELLY"
    document.getElementById("f").innerHTML="UI/UX DESIGNER"
      }
}

