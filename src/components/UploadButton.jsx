import Button from "./Button"

export default function UploadButton() {
    return (
        <Button onSmash={() => alert('Uploading!')}>
            Upload Image
        </Button>
    )
}