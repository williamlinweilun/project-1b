document.getElementById('toggle-button').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var button = document.getElementById('toggle-button');
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        button.classList.remove('open');
    } else {
        sidebar.classList.add('open');
        button.classList.add('open');
    }
});
