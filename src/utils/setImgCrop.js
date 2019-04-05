const setImgCrop = url => url.replace(/(?<=fit=crop&)(h=\d+&w=\d+)/, 'h=80&w=80');
export default setImgCrop;
