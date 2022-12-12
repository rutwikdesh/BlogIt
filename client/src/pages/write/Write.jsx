import "./write.css";
import React from 'react'
import single from "../../images/single.jpg"


export default function Write() {
    return (
        <div className="write">
            <img
                className="writeImg"
                src={single}
                alt=""
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i class="writeIcon fa-regular fa-square-plus"></i>
                    </label>
                    <input id="fileInput" type="file" style={{ display: "none" }} />
                    <input
                        className="writeInput"
                        placeholder="Title"
                        type="text"
                        autoFocus={true}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea
                        className="writeInput writeText"
                        placeholder="Tell your story..."
                        type="text"
                        autoFocus={true}
                    />
                </div>
                <button className="writeSubmit" type="submit">
                    Publish
                </button>
            </form>
        </div>
    );
}