document.getElementById('showCarouselButton').addEventListener('click', function() {
    const input = document.getElementById('myfile');
    const files = input.files;

    if (files.length === 0) {
        alert('Por favor, selecione pelo menos uma imagem.');
        return;
    }

    const carouselIndicators = document.getElementById('carouselIndicators');
    const carouselInner = document.getElementById('carouselInner');

    // Limpa o carrossel atual
    carouselIndicators.innerHTML = '';
    carouselInner.innerHTML = '';

    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const indicator = document.createElement('li');
            indicator.setAttribute('data-target', '#carouselExampleIndicators');
            indicator.setAttribute('data-slide-to', i);
            if (i === 0) indicator.classList.add('active');
            carouselIndicators.appendChild(indicator);

            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');
            if (i === 0) carouselItem.classList.add('active');

            const img = document.createElement('img');
            img.classList.add('d-block', 'w-100');
            img.src = e.target.result;

            carouselItem.appendChild(img);
            carouselInner.appendChild(carouselItem);
        };

        reader.readAsDataURL(files[i]);
    }

    // Exibe o carrossel
    document.getElementById('carouselExampleIndicators').style.display = 'block';
    $('#carouselExampleIndicators').carousel();
});