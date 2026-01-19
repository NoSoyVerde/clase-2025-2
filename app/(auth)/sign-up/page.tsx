import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CredentialsSignUpForm } from "@/components/auth";
import { APP_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function SignUpPage() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex flex-col items-center space-y-4">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt={APP_NAME}
            width={70}
            height={70}
            priority
          />
        </Link>
        <h1 className="text-2xl font-bold">Create Account</h1>
        <p className="text-muted-foreground">Enter your information below to sign up</p>
      </div>
      <div className="mt-8">
        <CredentialsSignUpForm />
      </div>
    </div>
  );
}
