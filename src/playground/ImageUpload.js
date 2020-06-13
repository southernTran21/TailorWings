import React from "react";

function ImageUpload() {
    function fileSelectedHandler(e) {
        console.log("e.target.files[0] :>> ", e.target.files[0]);
    }
    return (
        <div>
            <input type="file" onChange={fileSelectedHandler} />
        </div>
    );
}

export default ImageUpload;
