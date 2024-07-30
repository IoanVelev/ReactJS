import TeamListItem from "./TeamListItem";

export default function TeamList(props){
    return (
        <>
        <h1>{props.title}</h1>

        <ul>
            <TeamListItem>{props.teams[0]}</TeamListItem>
            <TeamListItem>{props.teams[1]}</TeamListItem>
            <TeamListItem>{props.teams[2]}</TeamListItem>
            <TeamListItem>{props.teams[3]}</TeamListItem>
        </ul>
        </>
    );
}