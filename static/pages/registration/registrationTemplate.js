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
                       button(
                          type="submit"
                          class="btn btn_type_outline btn_color_white"
                       )
                          | ЗАРЕГЕСТРИРОВАТЬСЯ

                       p.text_align_center.mt-20 
                           a(
                              href="/auth.html"
                              class="text_color_white"
                           )
                               | Войти  
`;