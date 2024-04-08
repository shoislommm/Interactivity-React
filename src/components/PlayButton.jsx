import Button from "./Button"

export default function PlayButton({movieName}) {
    function handlePlayClick() {
        alert(`Playing ${movieName}!`)
    }

    return (
        <Button onSmash={handlePlayClick}>
            Play &quot;{movieName}&quot;
        </Button>
    )
}