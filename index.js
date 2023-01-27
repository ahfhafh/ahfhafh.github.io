var blobEle = document.getElementById('blob');
var blobbEle = document.getElementById('bblob');
var blobTextEle = document.getElementById('blobText');
var hiddenInfoEle = document.getElementById('hidden_info');

// const blob_to_info = KUTE.fromTo(
//     '#blob',
//     { path: '#blob' },
//     { path: '#blobbb' }
// )

// const info_to_blob = KUTE.fromTo(
//     '#blob',
//     { path: '#blobbb' },
//     { path: '#blob' }
// )

// var blob_open = false;

// blobEle.addEventListener("mouseenter", () => {
//     if (!blob_open) {
//         blob_to_info.start();
//         blob_open = true;
//         hiddenInfoEle.style.display = "block";
//         blobTextEle.style.pointerEvents = "auto";
//         blobbEle.style.width = "100%";
//     }
// });

// blobEle.addEventListener("mouseleave", async () => {
//     info_to_blob.start();
//     hiddenInfoEle.style.display = "none";
//     blobTextEle.style.pointerEvents = "none";
//     await new Promise(resolve => setTimeout(resolve, 750));
//     blobbEle.style.width = "100%";
//     blob_open = false;
// });