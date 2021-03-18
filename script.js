
const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Promt to select media stream, pass to video element, thne play

async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = ()=>{
            videoElement.play();
        }

    }catch(error){

    }
    
}

button.addEventListener('click',async()=>{
    //Disable button
    button.disabled =true;

    //start Picture in Picture
    await videoElement.requestPictureInPicture();

    //Reset the button
    button.disabled =false;

})

selectMediaStream();

