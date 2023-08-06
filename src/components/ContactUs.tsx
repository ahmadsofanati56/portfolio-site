import { useRef, useState } from "react";
import { IconType } from "react-icons";

import {
  BsEnvelope,
  BsEnvelopeFill,
  BsFillPersonFill,
  BsMailbox,
} from "react-icons/bs";
import classnames from "classnames";

import { VscPerson, VscPersonAdd, VscThumbsup } from "react-icons/vsc";
import React from "react";
import {
  Alert,
  Button,
  Card,
  CardBody,
  Col,
  Container,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Row,
} from "reactstrap";
import { useForm } from "react-hook-form";

export const ContactUs = () => {
  function Error({ message }: { message: string }) {
    return (
      <div className="rounded  border border-red-600 bg-red-50 p-1 text-red-600">
        {message}
      </div>
    );
  }
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async () => {
    const data = {
      name,
      email,
      message,
    };

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Respone received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    });
  };
  return (
    <>
      <section className="section section-lg section-shaped my-20">
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <Container className="d-flex justify-center  ">
            <Card className="  w-full shadow-lg sm:w-full md:w-3/4 lg:w-3/4 xl:w-1/2 ">
              <CardBody className=" w-full  p-4">
                <Col className="p-3">
                  <div>
                    <div className="text-2xl drop-shadow-sm">
                      Want to work with me?
                    </div>
                    <div className="text-md ml-1 opacity-60">
                      Reach out to me using the form below
                    </div>
                  </div>
                  <div className=" my-10 ">
                    <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                      <BsFillPersonFill className="absolute ml-3 h-5 w-5" />
                      <input
                        {...register("name", {
                          required: { value: true, message: "Name Required" },
                        })}
                        type="text"
                        name="name"
                        placeholder="Your name"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        className="max-w-xlg input mt-1 w-full pl-10 pr-3 shadow-md "
                        value={name}
                        required
                      />
                    </div>
                    <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                      <BsEnvelopeFill className="absolute ml-3 mt-3 h-5 w-5" />
                      <input
                        {...register("email", {
                          required: { value: true, message: "Name Required" },
                          pattern: { value: /.+@.+/, message: "Invalid Email" },
                        })}
                        type="text"
                        name="email"
                        value={email}
                        required
                        placeholder="Email address"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        className="max-w-xlg input mt-3 w-full pl-10 pr-3 shadow-md"
                      />
                    </div>

                    <textarea
                      {...register("message", {
                        required: { value: true, message: "Name Required" },
                      })}
                      name="message"
                      className="textarea mt-3 w-full text-gray-400 shadow-md focus-within:text-gray-600 "
                      required
                      placeholder="Type a message..."
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    ></textarea>
                    <div className="mt-4 rounded-md bg-black  opacity-90 ">
                      <input
                        type="submit"
                        className=" btn w-full text-white outline-none focus:border-none focus-visible:outline-none"
                      />
                      {/* <button
                        className=" btn w-full p-0  "
                        type="submit"
                        onClick={(e) => onSubmit}
                      >
                        <b className="text-white">Send Message</b>
                      </button> */}
                    </div>
                  </div>
                </Col>
              </CardBody>
            </Card>
          </Container>
        </form>
      </section>
    </>
  );
};
