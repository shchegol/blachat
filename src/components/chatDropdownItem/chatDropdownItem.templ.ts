export default `
if !classes
    - classes = ""
    
li(
    id=id
    _key=_key
    class="dropdown__item " + classes
)
    if iconName
        i.material-icons #{iconName}
    
    | #{text}
`;