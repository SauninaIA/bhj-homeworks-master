const progress = document.getElementById('progress')
const form = document.getElementById('form');

form.addEventListener('submit', load);

function load(e) {
    e.preventDefault();

    const formData = new FormData();

    const file = document.getElementById('file').files[0];
    formData.append('file', file); 

    const xhr = new XMLHttpRequest();
    xhr.open ('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true)
    xhr.upload.addEventListener("progress", function(event) {
        if (event.lengthComputable) {
          const progressPercentage = event.loaded / event.total;
          progress.value = progressPercentage;
        }
      });
    
      xhr.send(formData); 
}