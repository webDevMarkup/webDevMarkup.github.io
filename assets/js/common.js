// 전체 포스팅에서 태그 필터링
$(document).ready(function init(){
    let url = window.location.href;
    let req = /#([^\s]+)$/.exec(url);

    if(!Array.isArray(req)) {
    return false;
}
    let selector = '#' + req.pop();
    showTag(selector);
});
function showTag(selector) {
    $('.archive-group').hide();
    $(selector).show();
}
$('.tag__cloud .tag').click(function(){
    $(this).toggleClass('selected');
});



// 현재 페이지에서 포스트 필터링
$("[data-tag]").click((e) => {
    currentTag = e.target.dataset.tag;
    filterByTagName(currentTag);
})

function filterByTagName(tagName) {
    $('.hidden').removeClass('hidden');
    $('.post').each((index, elem) => {
        if (!elem.hasAttribute(`data-${tagName}`)) {
            $(elem).addClass('hidden');
        }
    });
    // 태그 버튼 클릭 시 클래스 selected 추가/제거
    $(`.tag`).removeClass('selected');
    $(`.tag[data-tag=${tagName}]`).addClass('selected');
}