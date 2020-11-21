export default `
if !classes
    - classes = ""
    
button(
    id=id
    _key=_key
    type=type
    class="btn-icon " + classes
) 
    i.material-icons #{iconName}
`;