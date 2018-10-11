window.addEventListener("DOMContentLoaded",function(){
let [casualBtn, beachBtn, mlBtn,name1,name2,date,
     time,
     location,
     rsvpDetails,
     pName1,
     pName2,
     initial,
     pTime,
     pLocation,
     pRsvp
    ] =
    [document.querySelector('.casual'),
    document.querySelector('.beach'),
    document.querySelector('.moolight'),
    document.querySelector('.Name1'),
    document.querySelector('.Name2'),
    document.querySelector('.Date'),
     document.querySelector('.Time'),
     document.querySelector('.Location'),
     document.querySelector('.rsvpDetails'),
     document.querySelector('.pName1'),
      document.querySelector('.pName2'),
      document.querySelector('.pDate'),
      document.querySelector('.pTime'),
      document.querySelector('.pLocation'),
      document.querySelector('.pRsvp'),
    ]

console.log('name1 variable',name1)

let initial1;
let initial2;

beachBtn.addEventListener('click',function(){
  let image = document.querySelector('.previewContainer')
  image.style.backgroundImage = "url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/beach-with-big-rock-ahead-vertical-bermuda-heather-kirk.jpg')";
  image.style.transition ='all 2s';
  image.style.animationDelay='2s';
  
})
casualBtn.addEventListener('click',function(){
  let image = document.querySelector('.previewContainer')
  image.style.backgroundImage = "url('https://i.pinimg.com/originals/df/16/21/df1621249c94b8dfbfa929dcd0f2df7f.png')";
  image.style.transition ='all 2s';
  image.style.animationDelay='2s';
})
name1.addEventListener('keyup',function(e){
  pName1.innerHTML  = e.target.value;
  initial1 = e.target.value.charAt(0);
  initial.innerHTML = initial1;
})
name2.addEventListener('keyup',function(e){
  pName2.innerHTML  = e.target.value;
  initial2=name2.value.charAt(0);
  initial.innerHTML = `${initial1} & ${initial2}`;
})









 

})
