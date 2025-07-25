function volume_sphere() {
	let radiusVal = parseFloat(document.getElementById('radius').value);
	let volumeVal = 0;
	if ((typeof radiusVal === 'string' || radiusVal < 0) && typeof radiusVal !== '') {
		return NaN;
	}
	volumeVal = Math.PI * (4/3) * Math.pow(radiusVal,3);
	document.getElementById('volume').value = volumeVal.toFixed(4);
} 

document.getElementById('submit').addEventListener('click', volume_sphere);
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
