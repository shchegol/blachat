const pug = require('pug');
const template = `
.row.justify-content-center
    .col-12.col-md-4
        .row.mt-50
            .col-12.text_align_center
                h1.logo.logo_color_white BLABLA
                p.text_color_white.text_size_xxxl #{title}
                p.text_color_white Такой страницы не существует...
                p.mt-50
                    a(
                        href="/"
                        class="btn btn_type_outline btn_color_white"
                    )
                        | Вернуться к чату
`;

const compiledFn = pug.render(template, {title: '404'});
const root = document.getElementById('app');
root.innerHTML = compiledFn;