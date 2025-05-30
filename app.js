let cointer =0;
 let dyno = document.getElementById('dyno');
 let coint = document.getElementById('coint');
 
 dyno.addEventListener('click', function() {
 cointer++;
 coint.textContent = cointer;
});