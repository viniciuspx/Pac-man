function render_view (doc,view_name) {
    var link = doc.createElement('a');
    link.href = view_name;
    link.click();
}
