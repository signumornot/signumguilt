function createPanel() {
    // создание элементов в createPanel
}

function newReport() {
    // создание элементов в createReport
}

function addPanel() {
    // создание элементов в addPanel
}

function printDesc() {
    const typeSelect = document.getElementById('stuffType');
    var selectedType = typeSelect.value;
    const desc = document.getElementById('stuffDesc');
    
    if (selectedType == 'onlyDate') {
        desc.innerHTML = 'Создаёт поле ввода даты в формате ДД.ММ.ГГ'
    } else if (selectedType == 'dateAndTime') {
        desc.innerHTML = 'Создаёт поле ввода даты и времени в формате ДД.ММ.ГГ ЧЧ:ММ'
    } else if (selectedType == 'oneID') {
        desc.innerHTML = 'Создаёт поле ввода одного ID. <br> Название поля - то, что будет выделено жирным в строке отчёта. Например:<br><b>Собирающий:</b> [link888999]'
        var inputParameter = document.createElement('input');
        inputParameter.type = 'text'
        inputParameter.id = 'oneIDdesc'
        inputParameter.placeholder = 'Название поля'
        stuffElements.appendChild(inputParameter);
    } else if (selectedType == 'manyID') {
        desc.innerHTML = 'Создаёт поле ввода нескольких ID через пробел или запятую'
    } else if (selectedType == 'illegals') {
        desc.innerHTML = 'Создаёт форму заполнения нарушителей с вводом набора данных в зависимости от выбранного типа нарушений'
    } else if (selectedType == 'textInput') {
        desc.innerHTML = 'Создаёт поле ввода текста по пользовательским критериям'
    } else if (selectedType == 'dateInput') {
        desc.innerHTML = 'Создаёт поле ввода даты по пользовательским критериям'
    } else if (selectedType == 'selectCreate') {
        desc.innerHTML = 'Создаёт выпадающий список по пользовательским критериям'
    } else {
        desc.innerHTML = ''
    }
}
