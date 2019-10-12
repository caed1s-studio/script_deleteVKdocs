let deldoc = setInterval(
    function () {
        document.querySelector('.docs_delete_row').click();
        let item = document.querySelector('.docs_item_deleted');
        item.parentNode.removeChild(item);
    }, 100); 