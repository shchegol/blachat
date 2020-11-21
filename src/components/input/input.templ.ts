export default `  
label(
    class="input " + classes
)
    span.input__label #{labelText}
    input(
        id=id
        _key=_key
        type=type
        name=name
        value=value
        placeholder=placeholder
        data-validation-type=dataValidation
        class="input__field"
    )
    span.input__message #{message}
`;