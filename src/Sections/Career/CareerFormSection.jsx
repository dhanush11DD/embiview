import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { applicationImg } from "../../assets/career";
import { application } from "../../constants/career";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import { Icon } from "@iconify/react/dist/iconify.js";
import PropTypes from "prop-types";
import { cn } from "../../utils/cn.js";
import { Input } from "../../components/animation/text/input.jsx";
import { TextArea } from "../../components/animation/text/textarea.jsx";
import { Select } from "../../components/animation/text/select.jsx";
// import { on } from "events";

function CareerFormSection() {
  const form = useRef();
  const [error, setError] = useState(null);
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const [content, setContent] = useState({
    first_name: '',
    last_name: '',
    email: "",
    address: "",
    mobile: '',
    message: ''
  })
  const handleChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value })
  }

  const sendEmail = (e) => {
    e.preventDefault();
    if (content.first_name && content.last_name && content.email && content.mobile && content.message && content.address) {
      if (!isValidEmail(content.email)) {
        setError('Email is invalid');
        alert('Email is invalid')
      } else {
        setError(null)
        emailjs
          .sendForm("service_bcfn07v", "template_8j84yal", form.current, {
            publicKey: "v2ZvBGbh4PNTlwJvw",
          })
          .then(
            () => {
              alert("SUCCESS!");
              setContent({
                first_name: '',
                last_name: '',
                email: "",
                mobile: '',
                message: ''
              })
            },
            (error) => {
              console.log("FAILED...", error.text);
            }
          );
      }
    } else {
      alert("fill all columns")
    }
  };

  // Form configuration object
  const formConfig = [
    {
      label: "First Name",
      type: "text",
      name: "first_name",
      value: content.first_name,
      placeholder: "Enter First Name",
      className: "col-span-12 md:col-span-6",
    },
    {
      label: "Last Name",
      type: "text",
      name: "last_name",
      value: content.last_name,
      placeholder: "Enter Last Name",
      className: "col-span-12 md:col-span-6",
    },
    {
      label: "Email Address",
      type: "email",
      value: content.email,
      name: "email",
      placeholder: "Enter Email Address",
      className: "col-span-12 md:col-span-6",
    },
    {
      label: "Mobile Number",
      type: "text",
      name: "mobile",
      value: content.mobile,
      placeholder: "Enter Mobile Number",
      className: "col-span-12 md:col-span-6",
    },
    {
      label: "Address",
      type: "text",
      value: content.address,
      name: "address",
      placeholder: "Enter Address",
      className: "col-span-12",
    },
    {
      label: "Technical Expertise",
      type: "dropdown",
      name: "first_job_position",
      placeholder: "Enter Job Position",
      className: "col-span-12 md:col-span-6",
    },
    {
      label: "Resume",
      type: "file",
      name: "uploads",
      placeholder: "Attach your resume",
      className: "col-span-12 md:col-span-6",
    },
    {
      label: "Message (Optional)",
      type: "textarea",
      value: content.message,
      name: "message",
      placeholder: "Enter Your Message",
      className: "col-span-12",
    },
  ];

  return (
    <Section isBlack={false} className="">
      <Container className="">
        <div className="flex flex-col col-span-1 lg:flex-row gap-16">
          <div className="flex-1 flex flex-col gap-4">
            <div className="max-w-[380px] mx-auto">
              <img src={applicationImg} alt="applicationImg" className="" />
            </div>
            <div className="flex items-start justify-start text-light-text gap-4 mt-12">
              <div className="text-primary text-2xl mt-1">
                <Icon icon="fluent:location-12-filled" />
              </div>
              <p className="text-default">{application.contact.address}</p>
            </div>
            <div className="flex items-start justify-start text-light-text gap-4">
              <div className="text-primary text-2xl mt-1">
                <Icon icon="ic:round-mail" />
              </div>
              <div className="flex flex-col col-span-1 gap-3">
                {application.contact.emails.map((email, index) => (
                  <p className="text-default" key={index}>
                    {email}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1 lg:flex-2">
            <p className="blue-heading text-center lg:text-start">
              {application.blueHead}
            </p>
            <h2 className="heading-lg text-center lg:text-start text-light-heading">
              {application.heading}
            </h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              encType="multipart/form-data"
              className="grid grid-cols-12 mt-10 lg:grid-cols-12 gap-x-4 gap-y-8 text-black"
            >
              {formConfig.map((field, index) => (
                <LabelInputContainer
                  key={index}
                  className={`flex flex-col gap-2 ${field.className}`}
                >
                  <label htmlFor={field.name} className="text-default">
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <TextArea
                      onChange={handleChange}
                      value={field.value}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="border py-3 px-4 rounded-md"
                      cols="30"
                      rows="10"
                      type={field.type}
                    />
                  ) : field.type === "file" ? (
                    <div className="relative">
                      <Input
                        onChange={handleChange}
                        value={field.value}
                        type={field.type}
                        name={field.name}
                        className="border py-3 px-4 rounded-md pr-10"
                        placeholder={field.placeholder}
                      />
                      <div className="absolute bg-primary text-white rounded-[6px] p-1.5 top-2 right-2">
                        <Icon icon="icomoon-free:attachment"
                          className="text-lg cursor-pointer"
                        />
                      </div>
                    </div>
                  ) : field.type === 'dropdown' ? (
                    <Select>
                      <option value="sathish" hidden>Choose Technical Expertise</option>
                      <option value="sathish">Android Application</option>
                      <option value="sathish">Android SDK</option>
                      <option value="sathish">Android Framework</option>
                      <option value="">Programming Languages: Java, C++, Kotlin</option>
                      <option value="">HAL, WiFi, Bluetooth & Multimedia</option>
                      <option value="">Kernel, Driver & C</option>
                      <option value="">Cybersecurity functional safety</option>
                    </Select>

                  ) : (
                    <Input
                      onChange={handleChange}
                      value={field.value}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="border py-3 px-4 rounded-md"
                    />
                  )}
                </LabelInputContainer>
              ))}
              <div className="md:col-span-12 col-span-12 md:ml-auto ">
                <button
                  type="submit"
                  className="btn btn-hover mt-10 md:mb-6 btn-outline flex gap-3 lg:mx-0   group"
                >
                  <p className="text-primary group-hover:text-white">
                    Send Your Application
                  </p>
                  <Icon
                    icon="heroicons:arrow-up-16-solid"
                    className="text-lg rotate-45 group-hover:rotate-90 transition-all duration-75 text-primary group-hover:text-white"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

LabelInputContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default CareerFormSection;
