
// 放置一些公共方法
export function basePicUrl(val) { 
    return process.env.baseURL + process.env.imgPaths.imgUrl + val; 
} 

// export function html2Text(val) {
//     const div = document.createElement('div');
//     div.innerHTML = val;
//     return div.textContent || div.innerText;
// }