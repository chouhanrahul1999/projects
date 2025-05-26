"use client";
import { BottomWarning } from "../components/ui/BottamWarnind";
import { Button } from "../components/ui/button";
import { Heading } from "../components/ui/Heading";
import { InputBox } from "../components/ui/InputBox";
import { SubHeading } from "../components/ui/SubHeading";
import React from "react";

export default function Signup() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white px-8 pt-8 pb-10 rounded-xl justify-items-center">
        <Heading label="Sign in" />
        <div className="pb-2 ">
          <SubHeading label="Enter your credential to create your account" />
          <InputBox
            placeholder="rahul@gmail.com"
            label="Email"
            type="password"
          />
          <InputBox placeholder="123456" label="Password" type={"password"} />
          <div className="pt-6">
            <Button
              variant="primary"
              size="sm"
              text="Sign in"
              onClick={() => {}}
            ></Button>
          </div>
        </div>
        <BottomWarning
          label="Don't have an account?"
          buttonText="Sign up"
          to="/signup"
        />
      </div>
    </div>
  );
}
