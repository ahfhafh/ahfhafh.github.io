var blobEle = document.getElementById('blob');
var blobTextEle = document.getElementById('blobText');
var hiddenInfoEle = document.getElementById('hidden_info');

const blob_to_info = KUTE.fromTo(
    '#blob',
    { path: '#blob' },
    { path: '#hidden_info_bg' }
)

const info_to_blob = KUTE.fromTo(
    '#blob',
    { path: '#hidden_info_bg' },
    { path: '#blob' }
)

var blob_open = false;

blobEle.addEventListener("mouseenter", () => {
    if (!blob_open) {
        blob_to_info.start();
        blob_open = true;
        hiddenInfoEle.style.display = "block";
        blobTextEle.style.pointerEvents = "auto";
    }
});

blobTextEle.addEventListener("mouseleave", async () => {
    info_to_blob.start();
    hiddenInfoEle.style.display = "none";
    blobTextEle.style.pointerEvents = "none";
    await new Promise(resolve => setTimeout(resolve));
    blob_open = false;
});

// var granimInstance = new Granim({
//     element: '#bblob',
//     direction: 'left-right',
//     isPausedWhenNotInView: true,
//     states: {
//         "default-state": {
//             gradients: [
//                 ['#ff9966', '#ff5e62'],
//                 ['#00F260', '#0575E6'],
//                 ['#e1eec3', '#f05053']
//             ]
//         }
//     }
// });