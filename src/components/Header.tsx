interface HeaderProps {
showForm: boolean;
OntogleForm: () =>
}



export default function Header(
    {showForm, onToggleForm}: HeaderProps
){

    return (
     <>
        <header>
            <h1>hoje eu aprendi</h1>
            <button onClick={onToggleForm}>
                {showForm ? 'fechado':'compartilhar um fato'}
            </button>
        </header>
    </>

    )

}