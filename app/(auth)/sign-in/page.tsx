import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CredentialsSignInForm } from "@/components/auth";
import { APP_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function SignInPage() {
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
        <h1 className="text-2xl font-bold">Sign In</h1>
        <p className="text-muted-foreground">Sign in to your account</p>
      </div>
      <div className="mt-8">
        <CredentialsSignInForm />
      </div>
    </div>
  );
}
