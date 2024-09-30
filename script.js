document.addEventListener('DOMContentLoaded', function () {
    var whatsappIcon = document.getElementById('whatsapp-icon');
    var cityModal = document.getElementById('city-modal');
    var chatBox = document.getElementById('chat-box');
    var nameInput = document.getElementById('name-input');
    var sendBtn = document.getElementById('send-btn');
    var selectedCityPhone = '';

    // Открываем модальное окно выбора города при клике на иконку
    whatsappIcon.onclick = function () {
        cityModal.style.display = 'block';
    };

    // Закрываем модальное окно при клике на крестик
    var closeBtn = document.getElementsByClassName('close')[0];
    closeBtn.onclick = function () {
        cityModal.style.display = 'none';
    };

    // Закрытие чата при нажатии на close-chat
    var closeChatBtn = document.getElementsByClassName('close-chat')[0];
    closeChatBtn.onclick = function () {
        chatBox.style.display = 'none';
    };

    // Выбираем город и открываем чат
    var cityButtons = document.getElementsByClassName('city-btn');
    for (var i = 0; i < cityButtons.length; i++) {
        cityButtons[i].onclick = function () {
            selectedCityPhone = this.getAttribute('data-phone');
            cityModal.style.display = 'none';
            chatBox.style.display = 'block';
        };
    }

    // Перенаправляем в WhatsApp после ввода имени
    sendBtn.onclick = function () {
        var userName = nameInput.value.trim();
        if (userName) {
            var whatsappLink = 'https://wa.me/' + selectedCityPhone + '?text=' + encodeURIComponent('Привет, меня зовут ' + userName);
            window.open(whatsappLink, '_blank');
        } else {
            alert('Пожалуйста, введите ваше имя.');
        }
    };

    // Закрываем модальное окно и чат, если кликнуть вне их
    window.onclick = function (event) {
        if (event.target == cityModal) {
            cityModal.style.display = 'none';
        }
    };
});
