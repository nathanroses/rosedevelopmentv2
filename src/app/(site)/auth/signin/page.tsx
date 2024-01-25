import Signin from "@/components/Auth/Signin";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in | Rose Development - Next.js Template for Rose Developments",
  description: "This is Sign in page for Rose Development",
  // other metadata
};

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageTitle="Sign in" />

      <Signin />
    </>
  );
};

export default SigninPage;
