import { PaperClipIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { useSearchParams } from "react-router-dom";

const StandardMessageForm = () => {
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");
  const [preview, setPreview] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="message-form-container">
      {preview && (
        <div className="message-form-preview">
          <img
            className="message-form-preview-image"
            src={preview}
            onLoad={() => URL.revokeObjectURL(preview)}
            alt="preview"
          />
          <XMarkIcon
            className="message-form-icon-x"
            onClick={() => {
              setPreview("");
              setAttachment("");
            }}
          />
        </div>
      )}
      <div className="message-form">
        <div className="message-form-input-container">
          <input
            type="text"
            className="message-form-input"
            value={message}
            onChange={(e) => handleChange(e)}
            placeholder="send a message..."
          />
        </div>
        <div className="message-form-icons">
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png "
            multiple={false}
            noClick={true}
            onDrop={(acceptedFiles) => {
              setAttachment(acceptedFiles[0]);
              setPreview(URL.createObjectURL(acceptedFiles[0]));
            }}
          >
            {({ getRootProps, getInputProps, open }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <PaperClipIcon
                  className="message-form-icon-clip"
                  onClick={open}
                />
              </div>
            )}
          </Dropzone>
        </div>
      </div>
    </div>
  );
};

export default StandardMessageForm;
