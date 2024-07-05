import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { contactApp } from "../../assets/career";
import { application } from "../../constants/contact";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";
import PropTypes from "prop-types";
import { Input } from "../../components/animation/text/input";
import { TextArea } from "../../components/animation/text/textarea";

function CareerFormSection() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const form = useRef();
  const [content, setContent] = useState({
    firstName: '',
    lastName: '',
    email: "",
    mobile: '',
    message: ''
  })
  const handleChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value })
  }
  const sendEmail = (e) => {
    e.preventDefault();
    if (content.firstName && content.lastName && content.email && content.mobile && content.message) {
      if (!isValidEmail(content.email)) {
        setError('Email is invalid');
        alert('Email is invalid')
      } else {
        setError(null)
        if (content.mobile.length === 10) {
          // emailjs
   emailjs.sendForm('service_bcfn07v', 'template_nmbcr41', form.current, {
          publicKey: 'v2ZvBGbh4PNTlwJvw',
        })
    .then(
      () => {
        alert('SUCCESS!');
      },
      (error) => {
        alert('FAILED...', error.text);
      },
    );
  alert('success!')
  setContent({
    firstName: '',
    lastName: '',
    email: "",
    mobile: '',
    message: ''
  })
} else {
  alert("Mobile number must be 10 number")
}
      }
    } else {
  alert("fill all colmens")
}
  };

return (
  <Section isBlack={false} className="">
    <Container className="">
      <div className="flex flex-col col-span-1 lg:flex-row gap-16">
        <div className="flex-1 flex flex-col gap-4">
          <div className="max-w-[380px] mx-auto">
            <img src={contactApp} alt="applicationImg" className="" />
          </div>
          <div className="flex items-start justify-start text-light-text gap-4 py-6 mt-10">
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
          <form ref={form} onSubmit={sendEmail} encType="multipart/form-data" className="grid grid-cols-12 mt-10 lg:grid-cols-12 gap-x-4 gap-y-8 text-light-text">
            <div className="flex flex-col col-span-12 md:col-span-6 gap-2">
              <label htmlFor="text-default">First Name</label>
              <Input
                onChange={handleChange}
                value={content.firstName}
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                className="border py-3  px-4 rounded-md "
              />
            </div>
            <div className="flex flex-col col-span-12 md:col-span-6 gap-2">
              <label htmlFor="text-default">Last Name</label>
              <Input
                onChange={handleChange}
                value={content.lastName}
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                className="border py-3  px-4 rounded-md "
              />
            </div>
            <div className="flex flex-col col-span-12 md:col-span-6 gap-2">
              <label htmlFor="text-default">Email Address</label>
              <Input
                onChange={handleChange}
                value={content.email}
                type="text"
                name="email"
                placeholder="Enter Email Address"
                className="border py-3  px-4 rounded-md "
              />
            </div>
            <div className="flex flex-col col-span-12 md:col-span-6 gap-2">
              <label htmlFor="text-default">Mobile Number</label>
              <Input
                onChange={handleChange}
                value={content.mobile}
                type="text"
                name="mobile"
                placeholder="Enter Mobile Number"
                className="border py-3  px-4 rounded-md "
              />
            </div>

            <div className="flex flex-col col-span-12 md:col-span-12 gap-2">
              <label htmlFor="text-default">Message </label>
              <TextArea
                onChange={handleChange}
                value={content.message}
                name="message"
                placeholder="Enter Your Message"
                className="border py-3  px-4 rounded-md"
                id=""
                cols="30"
                rows="10"
              ></TextArea>
            </div>

            <div className="md:col-span-12 col-span-12 md:ml-auto ">
              <button
                type="submit"
                className="btn btn-hover mt-10 md:mb-6 btn-outline flex gap-3 lg:mx-0   group"
              >
                <p className="text-primary group-hover:text-white">
                  Send Message
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