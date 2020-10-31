export default `
.row.justify-content-center 
       .col-12.col-md-6 
           .row.mt-50 
               .col-12 
                   header
                      h1.logo.logo_color_white BLABLA                                            

           form 
               .row.mt-50 
                   .col-6 
                       label.input.input_color_white 
                           span.input__label Имя
                           input(
                              type="text"
                              name="first_name"
                              class="input__field"
                              placeholder="Ваше имя"
                              data-validation-type="name"
                           )
                           span.input__message 
                   
                   .col-6 
                       label.input.input_color_white 
                           span.input__label Фамилия
                           input(
                              type="text"
                              name="second_name"
                              class="input__field"
                              placeholder="Ваша фамилия"
                              data-validation-type="name"
                           )
                           span.input__message 
                   
               .row.mt-20 
                   .col-12 
                       label.input.input_color_white 
                           span.input__label Логин
                           input(
                              type="text"
                              name="login"
                              class="input__field"
                              placeholder="Ваш логин"
                              data-validation-type="text"
                           )
                           span.input__message 
                   
               .row.mt-20 
                   .col-6 
                       label.input.input_color_white 
                           span.input__label Почта
                           input(
                              type="text"
                              name="email"
                              class="input__field"
                              placeholder="Ваш email"
                              data-validation-type="email"
                           )
                           span.input__message 
                   
                   .col-6 
                       label.input.input_color_white 
                           span.input__label Телефон
                           input(
                              type="text"
                              name="phone"
                              class="input__field"
                              placeholder="Ваш телефон"
                              data-validation-type="phone"
                           )
                           span.input__message 
                   
               

               .row.mt-20 
                   .col-6 
                       label.input.input_color_white 
                           span.input__label Пароль
                           input(
                              type="password"
                              name="password"
                              class="input__field"
                              placeholder="Ваш пароль"
                              data-validation-type="password"
                           )
                           span.input__message 
                   
                   .col-6 
                       label.input.input_color_white 
                           span.input__label Повторите пароль
                           input(
                              type="password"
                              name="password_check"
                              class="input__field"
                              placeholder="Введите пароль ещё раз"
                           )
                           span.input__message 
                   
               

               .row.mt-40 
                   .col-12 
                       #button-2

                       p.text_align_center.mt-20 
                           a(
                              href="/auth.html"
                              class="text_color_white"
                           )
                               | Войти  
`;