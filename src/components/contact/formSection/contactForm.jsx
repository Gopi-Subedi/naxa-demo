// Name, Address, Email, Contact, upload a Photo and Upload a file (CV) with validation

import React, { useEffect, useState } from "react";
import "./contactForm.scss";
import CloseIcon from "../../../resource/images/CloseIcon.svg";

export default function ContactForm() {
  const initialvalue = { name: "", address: "", contact: "" };
  const [formValues, setFormValues] = useState(initialvalue);
  const [formErrors, setformErrors] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formValidated, setFormValidated] = useState(false);

  const handleImageRemove = (data) => {
    console.log(data);
    setSelectedImage(null);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleImageChange = (e) => {
    if (e.target.files) {
      const selected_files = Object.values(e.target.files);
      console.log(selected_files);

      selected_files.map((file) => {
        console.log(file);
        let reader = new FileReader();

        reader.onload = function (e) {
          console.log(e.target.result);
          const result = reader.result;
          setSelectedImage({ AttachmentName: file.name, Attachfile: result });
        };

        reader.readAsDataURL(file);
      });
    }
  };

  const renderPhotos = (source) => {
    console.log("source: ", source);

    return (
      <>
        <div className="ImagePreview">
          <img
            className="close-icon"
            src={CloseIcon}
            alt="CloseIcon"
            onClick={() => handleImageRemove(source)}
          />

          <img
            id="uploaded-image"
            src={source.Attachfile}
            draggable={false}
            alt="uploaded-img"
          />
        </div>
      </>
    );
  };

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("Proceed to API");
      setFormValidated(true);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const ptn = /^\w+$/;
    const digitPtn = /[0-9]/;
    const alphaptn = /[a-z]/;
    const capalpha = /[A-Z]/;

    if (fieldCheck()) {
      if (ptn.test(values.name)) {
        errors.name = "Name must contain only letters, numbers and underscores";
        formValues.name = "";
      } else if (!digitPtn.test(values.contact)) {
        errors.contact = "Contact info must contain only digits (0-9)";
        formValues.contact = "";
      } else if (
        alphaptn.test(values.contact) ||
        capalpha.test(values.contact)
      ) {
        errors.contact = "Contact info mustnot contain any letter";
        formValues.contact = "";
      } else if (values.contact.length < 10) {
        errors.contact = "Contact info must contain at least Ten characters";
        // formValues.contact = "";
      }
    } else {
      if (!values.contact) {
        errors.contact = "Contact info is required";
      }
      if (!values.name) {
        errors.name = "Name is required";
      }
      if (!values.address) {
        errors.address = "Address  is required";
      }
      if (selectedImage === null) {
        errors.photo = "Please upload image";
      }
      if (selectedFile === null) {
        errors.file = "Please upload your CV";
      }
      return errors;
    }
    return errors;
  };

  const fieldCheck = () => {
    if (
      formValues.name &&
      formValues.address &&
      formValues.contact &&
      selectedImage &&
      selectedFile
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className="contact-container ">
      <div className="contact-inner container">
        <div className="row justify-content-center">
          <div className="col-sm-6 col-md-6 contact-form">
            <div className="contact-title">Let's talk!</div>
            <div className="contact-subTitle">
              Want to chat? Shoot us an email at info@naxa.com.np /
              hr@naxa.com.np
            </div>
            <form className="mt-4" onSubmit={handleFormSubmit}>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  name="name"
                  onChange={handleChange}
                  value={formValues.name}
                  placeholder="Full Name"
                />
                {formErrors.name && (
                  <p className="errormsg">{formErrors.name}</p>
                )}
              </div>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  name="address"
                  onChange={handleChange}
                  value={formValues.address}
                  placeholder="Address"
                />
                {formErrors.address && (
                  <p className="errormsg">{formErrors.address}</p>
                )}
              </div>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  name="contact"
                  value={formValues.contact}
                  onChange={handleChange}
                  placeholder="Contact"
                />
                {formErrors.contact && (
                  <p className="errormsg">{formErrors.contact}</p>
                )}
              </div>
              <div class="form-group mb-3">
                <div>
                  <label
                    htmlFor="actual-btn"
                    className="form-control form-control-sm choose-btn"
                  >
                    Upload Photo
                  </label>
                  <input
                    className="choose-input d-none"
                    id="actual-btn"
                    type="file"
                    accept=".jpg,.jpeg,.gif,.png"
                    onChange={handleImageChange}
                  />
                  {selectedImage && (
                    <div className="Box-wrapper">
                      {renderPhotos(selectedImage)}
                    </div>
                  )}
                  {formErrors.photo && (
                    <p className="errormsg">{formErrors.photo}</p>
                  )}
                </div>
              </div>
              <div class="form-group mb-3">
                <div>
                  <label
                    htmlFor="pdf-btn"
                    className="form-control form-control-sm choose-btn"
                  >
                    Choose File
                  </label>
                  <input
                    className="choose-input d-none"
                    id="pdf-btn"
                    type="file"
                    accept=".pdf,.docx"
                    onChange={handleFileChange}
                  />
                  {formErrors.file && (
                    <p className="errormsg">{formErrors.file}</p>
                  )}
                </div>
              </div>

              <div class="form-group mb-3">
                <button
                  type="submit"
                  class="btn btn-apply btn-sm"
                  disabled={!fieldCheck()}
                >
                  Apply Now
                </button>
              </div>
              {formValidated && fieldCheck() && (
                <div className="form-message">
                  FORM SUCCESSFULLY VALIDATED!!!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
