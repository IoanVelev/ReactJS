export default function KillCounter(props) {
    let title = "Kill counter";

    // Conditional rendering with if statements
    if (props.count == 1) {
        return <h3>First blood!</h3>;
    } else if (props.count == 2) {
        title = "Double kill!";
    } else if (props.count > 3) {
        title = "Multi kill!";
    }

//Conditional rendering with ternary operator
    return (
        <>
            {props.count == 3
                ?
                <h3>Tripple kill!</h3>
                :
                <h3>{title}</h3>
            }
        </>
    )
}
