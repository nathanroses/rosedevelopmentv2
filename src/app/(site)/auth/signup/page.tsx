import Signup from "@/components/Auth/Signup";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sing up | Rose Development - Next.js Template for Rose Developments",
  description: "This is Sign up for Rose Development",
  // other metadata
};

const SignupPage = () => {
  return (
    <>
      <Breadcrumb pageTitle="Sign up" />

      <Signup />
    </>
  );
};

export default SignupPage;
