"use client";
import React from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="max-w-[1440px] flex mx-auto mt-[276.84px] max-h-full ">
        <div className="w-[708px] p-4">
          <div className=" w-[384px] mx-auto text-center  ">
            <div className="text-[24px] text-[#0F172A] font-semibold mb-[40px]">
              Geld
            </div>
            <div className=" text-[24px] text-[#0F172A] font-semibold">
              Create Geld account{" "}
            </div>
            <div>Sign up below to create your Wallet account</div>
            <div className="flex flex-col gap-[16px]">
              <input
                className="rounded-lg bg-[#D1D5DB] w-[384px] h-[48px]  mt-[40px] px-3"
                type="text"
                id="email"
                name="email"
                placeholder="Name"
              />
               <input
                className="rounded-lg bg-[#D1D5DB] w-[384px] h-[48px]  px-3"
                type="text"
                id="email"
                name="email"
                placeholder="Email"
              />
               <input
                className="rounded-lg bg-[#D1D5DB] w-[384px] h-[48px] px-3"
                type="text"
                id="email"
                name="email"
                placeholder="Password"
              />
              <input
                className="rounded-lg bg-[#D1D5DB] w-[384px] h-[48px] px-3"
                type="text"
                id="password"
                name="password"
                placeholder="Re-password"
              />
              <Button className="bg-[#0166FF] p-3 rounded-2xl font-bold hover:bg-blue-400"> Sign-up </Button>
              <div className="flex gap-3 justify-center">
                <div>Already have account?</div>
                <Link className="text-blue-500" 
                href="/Login">Log in 
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[708px] bg-[#0166FF] "></div>
      </div>
    </main>
  );
}
